import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import activitiLogo from '../../../images/activiti-logo.png';

class Navbar extends Component {
     getCurrentPath(path){
            if(!path)
                return;

            let currentPath;
            if(path == '/editor/forms')
                currentPath = 'forms';
            else if(path == '/editor/apps')
                currentPath = 'apps';
            else
                currentPath = 'processes';

            return currentPath ;
      }

    renderNavItem() {
            const path = this.getCurrentPath(this.context.router.route.location.pathname);
            return [
                <li key="processes" className={path == 'processes' && 'active'}>
                    <NavLink to="/editor/processes">Processes</NavLink>
                </li>,
                <li key="forms" className={path == 'forms' && 'active'}>
                    <NavLink to="/editor/forms">Forms</NavLink>
                </li>,
                <li key="apps" className={path == 'apps' && 'active'}>
                    <NavLink to="/editor/apps">Apps</NavLink>
                </li>
            ];
        }

    render() {
        const { name, signoutHandler } = this.props;

        return (
            <div className="navbar navbar-fixed-top navbar-inverse" role="navigation" id="main-header">
                <div className="fixed-container">
                    <div className="navbar-header">
                        <a className="landing-logo">
                            <img src={activitiLogo} />
                        </a>
                        <ul className="nav navbar-nav" id="main-nav">
                            { this.renderNavItem()}
                        </ul>
                    </div>
                    

                    <div className="pull-right">
                        <div className="dropdown btn-group btn-group-sm">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"> {name}
                                <span className="glyphicon glyphicon-chevron-down" style={{fontSize: "10px"}} aria-hidden="true"></span>
                            </button>
                            <ul className="dropdown-menu pull-right">
                                <li><a onClick={signoutHandler}>Sign out</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
    );
    }
}

Navbar.contextTypes = {
    router: PropTypes.object
};

Navbar.propTypes = {
    name : PropTypes.string,
    signoutHandler: PropTypes.func,
};



export default Navbar;