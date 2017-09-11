import React, { Component } from 'react';

import Toolbar from '../common/Toolbar';
import SearchInput from '../common/SearchInput';

class FormPage extends Component {

    filterDelayed() {
        
    }
        
    activateFilter() {

    }

    render() {
        return(
            <div>
                <Toolbar title="Forms">
                    <button type="button" className="btn btn-default">Create Form</button>
                </Toolbar>
                
                <div className="col-xs-2 filter-wrapper">
                    <SearchInput filterDelayed={ this.filterDelayed }/>
                    <ul className="filter-list">
                        <li className = "current">
                            <a onClick={ this.activateFilter }>My reusable forms</a>
                        </li>    
                    </ul>
                </div>

                <div className="col-xs-10 item-wrapper" id="list-items">
                    FromPage
                </div>
            </div>
        );
    }
}

export default FormPage;