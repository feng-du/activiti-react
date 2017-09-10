import React, { Component } from 'react';

import Toolbar from '../common/Toolbar';
class FormPage extends Component {
    render() {
        return(
            <div>
                <Toolbar title="Forms">
                    <button type="button" className="btn btn-default">Create Form</button>
                </Toolbar>
                FormPage
            </div>
        );
    }
}

export default FormPage;