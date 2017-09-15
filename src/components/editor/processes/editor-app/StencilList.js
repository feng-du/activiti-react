import React, { Component } from 'react';

import StencilItem from './StencilItem';

class StencilList extends Component {

    render() {
        const { stencilItemGroups } = this.props;

        return(
            <div className="stencils" id="paletteSection">
                { 
                    stencilItemGroups.map((group, index) => <StencilItem key={index} group={group} index={index} />) 
                }
            </div>

        )
    }
}

export default StencilList;