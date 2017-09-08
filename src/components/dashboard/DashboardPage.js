import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../common/Header';

import { fetchAccount } from '../../actions/authActions';
import { getAppDefinition } from '../../actions/runtimeActions';

class DashboardPage extends React.Component {

        

    componentWillMount() {
        this.props.fetchAccount();
        this.props.getAppDefinition();
    }



    render() {
        const { user } = this.props;
        if(!user)
            return null;

        return(
            <div>
                <Header FullName= { user.FullName }/>
                {/* <div class="alert-wrapper" ng-cloak>
            <div class="alert {{alerts.current.type}}" ng-show="alerts.current" ng-click="dismissAlert()">
                <span>{{alerts.current.message}}</span>
                <span class="badge" ng-show="alerts.queue.length">{{alerts.queue.length + 1}}</span>
            </div>
        </div> */}

                <div className="apps-wrapper clearfix">
                    <button onClick= {this.test} >refresh token</button>
                </div>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    user : PropTypes.object
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}


export default connect(mapStateToProps, {fetchAccount, getAppDefinition})(DashboardPage);