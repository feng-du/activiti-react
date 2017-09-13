import React from 'react';

const EditorHeader = (props) => {
    return (
    <div className="subheader editor-toolbar" id="editor-header">
        {/* <div className="btn-group">
          <div className="btn-toolbar pull-left">
              <button id="{{item.id}}"
                      title="{{item.title | translate}}"
                      ng-repeat="item in items"
                      ng-switch on="item.type"
                      className="btn btn-inverse" ng-className="{'separator': item.type == 'separator'}"
                      ng-disabled="item.type == 'separator' || item.enabled == false"
                      ng-click="toolbarButtonClicked($index)">
                  <i ng-switch-when="button" ng-className="item.cssclassName" className="toolbar-button" data-toggle="tooltip" title="{{item.title | translate}}"></i>
                  <div ng-switch-when="separator" ng-className="item.cssclassName"></div>
              </button>
              </div>
          </div> */}
          <div className="btn-group pull-right">
              <div className="btn-toolbar pull-right">
              <button title="Close" className="btn btn-inverse">
                  <i className="toolbar-button ng-scope glyphicon glyphicon-remove" data-toggle="tooltip" title="Close"></i>
              </button>
              </div>
          </div>
    </div>
    );
};

export default EditorHeader;