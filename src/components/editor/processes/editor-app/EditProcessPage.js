import React, { Component } from 'react';

import EditorHeader from './EditorHeader';

class EditProcessPage extends Component {
    render() {
        const { match } = this.props;

        return(
            <div>
                <EditorHeader />

                <div className="full">
                    <div className="row row-no-gutter">
                        <div id="paletteHelpWrapper" className="col-xs-3">
                                
                        </div>
                        <div id="canvasHelpWrapper" className="col-xs-9">

                        </div>
                        <div id="propertiesHelpWrapper" class="col-xs-9">
                        
                        </div>
                    </div>
                </div>
                EditProcessPage: {match.params.processId}
            </div>
        );
    }
}

export default EditProcessPage;