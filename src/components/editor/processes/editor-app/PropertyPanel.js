import React from 'react';

class PropertyPanel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            collapsed: false,
        };

        this.expandHandle = this.expandHandle.bind(this);
    }

    expandHandle() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    renderHeader() {
        const { selectedItem：{ auditData }, modelData } = this.props;
        const { collapsed } = this.state;
        
        let title;
        if (selectedItem.title != undefined && selectedItem.title != null && selectedItem.title.length > 0)
            title = selectedItem.title；
        else if (!selectedItem || selectedItem.title == undefined || selectedItem.title == null || selectedItem.title.length == 0)
            title = modelData.name;

        return (
            <div className="clearfix">
                {
                    auditData.createDate && 
                    <div className="pull-right">
                        <strong>Date created: </strong> {auditData.createDate}
                    </div>
                }
                {
                    auditData.author && 
                    <div className="pull-right">
                        <strong>Author: </strong> {auditData.author}
                    </div>
                }
                <div className="selected-item-title">
                    <a onClick={this.expandHandle}> 
                        <i className={`glyphicon ${collapsed?'glyphicon-chevron-right':''} ${(!collapsed)?'glyphicon-chevron-down':''}`} ></i>
                        <span>{title}</span>
                    </a>
                </div>
            </div>
        );
    }

    renderBody() {
        const { selectedItem } = this.props;

        return (
            <div className="selected-item-body">
                <div>
                    {
                        selectedItem.properties.map((property, index) => {
                            return (
                                <div className={`property-row ${ index%2 == 0?'clear' : '' }`}
                                    >
                                    {
                                        property.hidden ? 
                                        <span className="title-removed"><i>{property.title}&nbsp;removed&nbsp;:</i></span> :
                                        <span className="title" title="{property.description}">{property.title}&nbsp;:</span>
                                    }
                                    
                                    
                                    <span className="value"> 
                                        {/* <ng-include
                                            src="getPropertyTemplateUrl($index)" ng-if="!property.hasReadWriteMode"></ng-include>
                                        <ng-include src="getPropertyReadModeTemplateUrl($index)"
                                            ng-if="property.hasReadWriteMode && property.mode == 'read'"></ng-include>
                                        <ng-include src="getPropertyWriteModeTemplateUrl($index)"
                                            ng-if="property.hasReadWriteMode && property.mode == 'write'"></ng-include> */}
                                    </span>
                                </div>
                            );
                        })
                    }
                    
                </div>
            </div>
        );
    }

    render() {

        const { collapsed } = this.state;

        return (
            <div className={`propertySection ${collapsed?'collapsed':''}`} id="propertySection">
                <div className="selected-item-section">
                    { this.renderHeader() }
                    { this.renderBody() }
                </div>
            </div>
      
    
        );
    }
}

export default PropertyPanel;