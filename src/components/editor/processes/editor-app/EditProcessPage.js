import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStencilSetForEditor, getModel } from '../../../../actions/editorActions';

import EditorHeader from './EditorHeader';
import StencilList from './StencilList';
import CanvasPanel from './CanvasPanel';
import PropertyPanel from './PropertyPanel';

class EditProcessPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.getStencilSetForEditor();
        this.props.getModel(this.props.match.params.processId);
    }

    render() {
        const { stencils, modelData } = this.props;

        return(
            <div>
                <EditorHeader />

                <div className="full">
                    <div className="row row-no-gutter">
                        <div id="paletteHelpWrapper" className="col-xs-3">
                            <StencilList stencilItemGroups={stencils.stencilItemGroups}/>
                        </div>
                        <div id="canvasHelpWrapper" className="col-xs-9">
                            <CanvasPanel />
                        </div>
                        <div id="propertiesHelpWrapper" className="col-xs-9">
                            <PropertyPanel modelData={ modelData } />
                        </div>
                    </div>
                </div>
                {/* EditProcessPage: {match.params.processId} */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stencils: state.editor.stencils,
        modelData: state.editor.ModelData,
    }
}

export default connect(mapStateToProps, { getStencilSetForEditor, getModel })(EditProcessPage);