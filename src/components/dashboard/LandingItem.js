import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LandingItem = (props) => {
    const { app } = props;

    const renderDropdownFunc= () => {
        return (
            <div className="actions" onClick={(event) => event.preventDefault()}>
                <i className="icon icon-caret-down"></i>
            </div>
        );
    }

    return (
        <div id={app.id} className="app-wrapper">
            <div className={`app ${app.theme}`}>
                <a href={app.fixedUrl}>
                    <div className="app-content">
                        <h3>{app.titleKey || app.name}</h3>
        
                        <p>{app.descriptionKey || app.description}</p>
                    </div>
                    <div className="backdrop">
                        <i className={app.icon}></i>
                    </div>
                    <div className="logo">
                        <i className={app.icon}></i>
                    </div>
                    {/* <div className="actions" ng-if="app.deletable" ng-click="$event.preventDefault();" bs-dropdown={appActions} placement="bottom-right">
                        <i className="icon icon-caret-down"></i>
                    </div> */}
                    {renderDropdownFunc()}
                </a>
            </div>
        </div>
    );
};

export default LandingItem;