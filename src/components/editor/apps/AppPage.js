import React, { Component } from 'react';

import Toolbar from '../common/Toolbar';
import SearchInput from '../common/SearchInput';

class AppPage extends Component {

    filterDelayed() {
        
    }
        
    activateFilter() {

    }

    render() {
        return(
            <div>
                <Toolbar title="App definitions">
                    <button type="button" className="btn btn-default">Create App</button>
                    <button type="button" className="btn btn-default">Import App</button>
                </Toolbar>
                
                <div className="col-xs-2 filter-wrapper">
                    <SearchInput filterDelayed={ this.filterDelayed }/>
                    <ul className="filter-list">
                        <li className = "current">
                            <a onClick={ this.activateFilter }>My app definitions</a>
                        </li>    
                    </ul>
                </div>

                <div className="col-xs-10 item-wrapper" id="list-items">
                    Apps
                </div>
            </div>
        );
    }
}

export default AppPage;