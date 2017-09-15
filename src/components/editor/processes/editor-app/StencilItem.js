import React from 'react';

import render_stencil_item_template from './render_stencil_item_template';

class StencilItem extends React.Component {
    constructor(props,context){
        super(props, context);
        
        this.state = {
            expanded: false,
        };

        this.expandedHandle = this.expandedHandle.bind(this);
    }

    expandedHandle() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const { group, index } = this.props;
        const { expanded } = this.state;

        if(!(group.visible && group.items))
            return null;

        return(
            <ul className={ `stencil-group ${(!expanded)?'collapsed':''} ${index==0?'first':''}` }>
                <li>
                    {render_stencil_item_template(group, expanded, this.expandedHandle)}
                </li>
            </ul>
        );
    }
}


export default StencilItem;