import React, { Component } from 'react';

import Toolbar from '../common/Toolbar';
class AppPage extends Component {
    render() {
        return(
            <div>
                <Toolbar title="App definitions">
                    <button type="button" className="btn btn-default">Create App</button>
                    <button type="button" className="btn btn-default">Import App</button>
                </Toolbar>
                AppPage
            </div>
        );
    }
}

export default AppPage;