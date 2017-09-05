import React from 'react';
import Header from '../common/Header';

class DashboardPage extends React.Component {
    render() {
        return(
            <div>
                <Header />
                {/* <div class="alert-wrapper" ng-cloak>
            <div class="alert {{alerts.current.type}}" ng-show="alerts.current" ng-click="dismissAlert()">
                <span>{{alerts.current.message}}</span>
                <span class="badge" ng-show="alerts.queue.length">{{alerts.queue.length + 1}}</span>
            </div>
        </div> */}

                <div className="apps-wrapper clearfix">
                </div>
            </div>
        );
    }
}

export default DashboardPage;