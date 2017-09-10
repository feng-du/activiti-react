import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../common/Header';
import Landing from './Landing';

import { fetchAccount, signoutUser } from '../../actions/authActions';
import { getAppDefinition } from '../../actions/runtimeActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style-landing.css'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../../styles/common/style.css';
import '../../styles/common/style-retina.css';

import 'bootstrap/dist/js/bootstrap';

class DashboardPage extends React.Component {

    componentWillMount() {
        this.props.getAppDefinition();
    }

    render() {
        const { user, signoutUser } = this.props;
        if(!user)
            return null;

        return(
            <div>
                <Header name= { user.name } signoutHandler={signoutUser}/>
                {/* <div class="alert-wrapper" ng-cloak>
            <div class="alert {{alerts.current.type}}" ng-show="alerts.current" ng-click="dismissAlert()">
                <span>{{alerts.current.message}}</span>
                <span class="badge" ng-show="alerts.queue.length">{{alerts.queue.length + 1}}</span>
            </div>
        </div> */}

                <Landing />
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


export default connect(mapStateToProps, {fetchAccount, signoutUser, getAppDefinition})(DashboardPage);