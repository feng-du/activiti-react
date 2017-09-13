import React from 'react';
import PropTypes from 'prop-types';


import ProcessItem from './ProcessItem';

const ProcessList = (props) => {
    const { models } = props;
    if(!models || models.length < 0) return null;

    return (
        <div>
            { models.map(process => <ProcessItem key= {process.id} process={process}/>)}    
        </div>
    );
};

ProcessList.propTypes = {
    models: PropTypes.array.isRequired
};


export default ProcessList;