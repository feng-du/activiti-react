import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import config from '../../../api/apiConfig';


class ProcessItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.showProcessDetails = this.showProcessDetails.bind(this);
        this.editProcessDetails = this.editProcessDetails.bind(this);
    }

    showProcessDetails(event) {
        event.stopPropagation();
    }
    
    editProcessDetails(event) {
        event.stopPropagation();

        const { id } = this.props.process;

        this.props.history.push(`/editor/processes/${id}`);
    }

    render() {
        const { process } = this.props;
        if(!process) return null;

        const imageVersion = Date.now();
        const imageUrl = `${config.API_HOST}/app/rest/models/${process.id}/thumbnail?version=${imageVersion}`;
        return(
            <div className="item fadein">
                <div className="item-box" style={{ backgroundImage: `url(${imageUrl})`}} onClick={ this.showProcessDetails }>
                    <div className="actions">
                        <span className="badge">v{process.version}</span>
                        <div className="btn-group pull-right">
                            <button id="detailsButton" type="button" onClick={this.showProcessDetails} className="btn btn-default" title="Show details">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                            <button id="editButton" type="button" onClick={ this.editProcessDetails } className="btn btn-default" title="Visual Editor">
                                <i className="glyphicon glyphicon-edit"></i>
                            </button>
                        </div>
                    </div>
                    <div className="details">
                        <h3 className="truncate" title={process.name}>
                            {process.name}
                        </h3>
                        <div className="basic-details truncate">
                            <span><i className="glyphicon glyphicon-user"></i> {process.createdByFullName}</span> <span title={process.lastUpdated}><i className="glyphicon glyphicon-pencil"></i> {process.lastUpdated}</span>
                        </div>
                        <p>{process.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


ProcessItem.propTypes = {
    process: PropTypes.object.isRequired,
}

export default withRouter(ProcessItem);