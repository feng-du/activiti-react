import React from 'react';

const Toolbar = (props) => {
    const { title, children } = props;

    return (
        <div className="subheader">
            <div className="fixed-container">
                <div className="btn-group pull-right">
                    {children}
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Toolbar;