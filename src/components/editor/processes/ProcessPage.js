import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../common/Toolbar';
import SearchInput from '../common/SearchInput';
import ProcessList from './ProcessList';

import * as actions from '../../../actions/editorActions';



class ProcessPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.activateFilter = this.activateFilter.bind(this);
    }

    filterDelayed() {

    }

    activateFilter() {
        this.props.getModels('myProcesses',0,'modifiedDesc');
    }
    
    render() {
        const { models } = this.props;
        return(
            <div>
                <Toolbar title="Business Process Models">
                    <button type="button" className="btn btn-default">Create Process</button>
                    <button type="button" className="btn btn-default">Import Process</button>
                </Toolbar>
                <div className="container-fluid content" offset="40">
                    <div className="col-xs-2 filter-wrapper">
                        <SearchInput filterDelayed={ this.filterDelayed }/>
                        <ul className="filter-list">
                            <li className = "current">
                                <a onClick={ this.activateFilter }>My processes</a>
                            </li>    
                        </ul>
                    </div>

                    <div className="col-xs-10 item-wrapper" id="list-items">
                        <ProcessList models={ models }/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        locale: state.locale,
        models: state.editor.models,
    };
}

export default connect(mapStateToProps, actions)(ProcessPage);