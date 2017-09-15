import React from 'react';

import deleteImg from '../../../../libs/editor/editor-app/images/delete.png';
import wrenchImg from '../../../../libs/editor/editor-app/images/wrench.png';

const CanvasPanel = (props) => {
    return(
        <div className="canvas-wrapper" id="canvasSection" > 
            <div className="canvas-message" id="model-modified-date"></div>
            <div className="Oryx_button" 
                id="delete-button" 
                title="Delete the element from the model"
                style={{display:'none'}}>
                <img src={deleteImg}/>
            </div>
            <div className="Oryx_button" 
                id="morph-button"
                title="Change the element type"
                style={{display:'none'}}>
                <img src={wrenchImg}/>
            </div>
            <div className="Oryx_button"
                style={{display:'none'}}>
            </div>
        </div>

    );
};

export default CanvasPanel;