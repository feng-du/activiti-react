
// Helper method: find a group in an array
function findGroup(name, groupArray) {
    for (let index = 0; index < groupArray.length; index++) {
        if (groupArray[index].name === name) {
            return groupArray[index];
        }
    }
    return null;
}

// Helper method: add a new group to an array of groups
function addGroup(groupName, groupArray) {
    let group = { name: groupName, items: [], paletteItems: [], groups: [], visible: true };
    groupArray.push(group);
    return group;
}

export default function(data) {

    /* Build stencil item list */

    // Build simple json representation of stencil set
    let stencilItemGroups = [];
    

    /*
    StencilSet items
    */

    let quickMenuDefinition = [
        'UserTask', 'EndNoneEvent', 'ExclusiveGateway', 'CatchTimerEvent', 'ThrowNoneEvent', 'TextAnnotation',
        'SequenceFlow', 'Association'
    ];
    let ignoreForPaletteDefinition = ['SequenceFlow', 'MessageFlow', 'Association', 'DataAssociation', 'DataStore', 'SendTask'];
    let quickMenuItems = [];

    let morphRoles = [];
    for (let i = 0; i < data.rules.morphingRules.length; i++) 
    {
        let role = data.rules.morphingRules[i].role;
        let roleItem = {'role': role, 'morphOptions': []};
        morphRoles.push(roleItem);
    }

    // Check all received items
    for (let stencilIndex = 0; stencilIndex < data.stencils.length; stencilIndex++) {
        // Check if the root group is the 'diagram' group. If so, this item should not be shown.
        let currentGroupName = data.stencils[stencilIndex].groups[0];
        if (currentGroupName === 'Diagram' || currentGroupName === 'Form') {
            continue;  // go to next item
        }

        let removed = false;
        if (data.stencils[stencilIndex].removed) {
            removed = true;
        }

        let currentGroup = undefined;
        if (!removed) {
            // Check if this group already exists. If not, we create a new one
            if (currentGroupName !== null && currentGroupName !== undefined && currentGroupName.length > 0) {

                currentGroup = findGroup(currentGroupName, stencilItemGroups); // Find group in root groups array
                if (currentGroup === null) {
                    currentGroup = addGroup(currentGroupName, stencilItemGroups);
                }

                // Add all child groups (if any)
                for (let groupIndex = 1; groupIndex < data.stencils[stencilIndex].groups.length; groupIndex++) {
                    let childGroupName = data.stencils[stencilIndex].groups[groupIndex];
                    let childGroup = findGroup(childGroupName, currentGroup.groups);
                    if (childGroup === null) {
                        childGroup = addGroup(childGroupName, currentGroup.groups);
                    }

                    // The current group variable holds the parent of the next group (if any),
                    // and is basically the last element in the array of groups defined in the stencil item
                    currentGroup = childGroup;
                }
            }
        }

        // Construct the stencil item
        let stencilItem = {
            'id': data.stencils[stencilIndex].id,
            'name': data.stencils[stencilIndex].title,
            'description': data.stencils[stencilIndex].description,
            'icon': data.stencils[stencilIndex].icon,
            'type': data.stencils[stencilIndex].type,
            'roles': data.stencils[stencilIndex].roles,
            'removed': removed,
            'customIcon': false,
            'canConnect': false,
            'canConnectTo': false,
            'canConnectAssociation': false
        };

        if (data.stencils[stencilIndex].customIconId && data.stencils[stencilIndex].customIconId > 0){
            stencilItem.customIcon = true;
            stencilItem.icon = data.stencils[stencilIndex].customIconId;
        }

        if (!removed) {
            if (quickMenuDefinition.indexOf(stencilItem.id) >= 0){
                quickMenuItems[quickMenuDefinition.indexOf(stencilItem.id)] = stencilItem;
            }
        }

        if (stencilItem.id === 'TextAnnotation' || stencilItem.id === 'BoundaryCompensationEvent') {
            stencilItem.canConnectAssociation = true;
        }

        for (let i = 0; i < data.stencils[stencilIndex].roles.length; i++){
            let stencilRole = data.stencils[stencilIndex].roles[i];
            if (stencilRole === 'sequence_start'){
                stencilItem.canConnect = true;
            }
            else if (stencilRole === 'sequence_end'){
                stencilItem.canConnectTo = true;
            }

            for (let j = 0; j < morphRoles.length; j++){
                if (stencilRole === morphRoles[j].role){
                    if (!removed){
                        morphRoles[j].morphOptions.push(stencilItem);
                    }
                    stencilItem.morphRole = morphRoles[j].role;
                    break;
                }
            }
        }

        if (currentGroup){
            // Add the stencil item to the correct group
            currentGroup.items.push(stencilItem);
            if (ignoreForPaletteDefinition.indexOf(stencilItem.id) < 0){
                currentGroup.paletteItems.push(stencilItem);
            }
        } else{
            // It's a root stencil element
            if (!removed) {
                stencilItemGroups.push(stencilItem);
            }
        }
    }

    for (let i = 0; i < stencilItemGroups.length; i++) {
        if (stencilItemGroups[i].paletteItems && stencilItemGroups[i].paletteItems.length == 0){
            stencilItemGroups[i].visible = false;
        }
    }

    // $scope.stencilItemGroups = stencilItemGroups;

    let containmentRules = [];
    for (let i = 0; i < data.rules.containmentRules.length; i++) {
        let rule = data.rules.containmentRules[i];
        containmentRules.push(rule);
    }
    // $scope.containmentRules = containmentRules;

    // remove quick menu items which are not available anymore due to custom pallette
    let availableQuickMenuItems = [];
    for (let i = 0; i < quickMenuItems.length; i++) {
        if (quickMenuItems[i]) {
            availableQuickMenuItems[availableQuickMenuItems.length] = quickMenuItems[i];
        }
    }

    // $scope.quickMenuItems = availableQuickMenuItems;
    // $scope.morphRoles = morphRoles;
    
    return { stencilItemGroups, containmentRules, morphRoles, quickMenuItems: availableQuickMenuItems };
}