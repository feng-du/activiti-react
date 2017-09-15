import React from 'react';

import config from '../../../../api/apiConfig';

function uniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

function render_stencil_item_template(group, expanded, expandHandle) {
    return [
        <span key={uniqueId()} onClick={() => expandHandle()}>
            <i className={ `glyphicon ${ (!expanded)?'glyphicon-chevron-right':'' } ${expanded?'glyphicon-chevron-down':'' }`}></i>
            { group.name }
        </span>,

        <ul key={uniqueId()}>
        {
            group.paletteItems.map(item => {
                return( 
                    <li key={item.id} id={item.id} title={ item.description } className="stencil-item">
                        <img src={`/editor-app/stencilsets/bpmn2.0/icons/${item.icon}`} width="16px;" height="16px;" />      
                        {item.name }
                    </li>
                );
            })
        }      
        </ul>
    ];

};

export default render_stencil_item_template;