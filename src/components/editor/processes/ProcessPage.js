import React, { Component } from 'react';

import Toolbar from '../common/Toolbar';

class ProcessPage extends Component {
render() {
        return(
            <div>
                <Toolbar title="Business Process Models">
                    <button type="button" className="btn btn-default">Create Process</button>
                    <button type="button" className="btn btn-default">Import Process</button>
                </Toolbar>

                ProcessPage
            </div>
        );
    }
}

export default ProcessPage;