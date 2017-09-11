import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../common/Toolbar';
import SearchInput from '../common/SearchInput';

class ProcessPage extends Component {
    filterDelayed() {

    }

    activateFilter() {

    }
    
    render() {
        return(
            <div>
                <Toolbar title="Business Process Models">
                    <button type="button" className="btn btn-default">Create Process</button>
                    <button type="button" className="btn btn-default">Import Process</button>
                </Toolbar>

                <div className="col-xs-2 filter-wrapper">
                    <SearchInput filterDelayed={ this.filterDelayed }/>
                    <ul className="filter-list">
                        <li className = "current">
                            <a onClick={ this.activateFilter }>My processes</a>
                        </li>    
                    </ul>
                </div>

                <div className="col-xs-10 item-wrapper" id="list-items">
                    

                    ProcessPage
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { }
}

export default connect(mapStateToProps)(ProcessPage);