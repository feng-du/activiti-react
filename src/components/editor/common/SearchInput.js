import React from 'react';

const SearchInput = (props) => {
    const { filterDelayed } = props;

    return(
        <div className="input-group">
            <span className="input-group-addon"> <i className="glyphicon glyphicon-search"></i></span> 
            <input type="text" className="form-control" placeholder="Search" onChange={ filterDelayed }/>
        </div>
    );
};

export default SearchInput;
