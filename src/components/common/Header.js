import React, { Component } from 'React';

import activitiLogo from '../../images/activiti-logo.png';

class Header extends Component {
    render() {
        return (
        <div className="navbar navbar-fixed-top navbar-inverse" role="navigation" id="main-nav">
            <div className="fixed-container">
                <div className="navbar-header">
                    <a className="landing-logo">
                        <img src={activitiLogo} />
                    </a>
                </div>
                <div className="pull-right">
                    <div className="dropdown btn-group btn-group-sm">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"> firstname-lastname
                            <span className="glyphicon glyphicon-chevron-down" style={{fontSize: "10px"}} aria-hidden="true"></span>
                        </button>
                        <ul className="dropdown-menu pull-right">
                            <li><a >Sign out</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
    }
}

export default Header;