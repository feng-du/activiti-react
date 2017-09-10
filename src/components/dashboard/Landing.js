import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingItem from './LandingItem';

class Landing extends Component {

    renderItem() {
        const { apps } = this.props;
        if(!apps || apps.length<=0)
            return;
    
        const items = [];
        apps.forEach(function(app) {
            items.push(<LandingItem key={app.id} app= {app} />)
        }, this);

        return items;
    }

    render() {
        return(
            <div className="apps-wrapper clearfix">
                {this.renderItem()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        apps: state.runtime.apps
    };
}

export default connect(mapStateToProps)(Landing);