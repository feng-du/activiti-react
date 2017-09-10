import * as api from '../api/runtime/appDefinitionApi';
import { GET_APPDEFINITION } from './actionTypes';

export const getAppDefinition = () => dispatch => {
    return api.getAppDefinition()
        .then(response => {
          const apps = transformAppsResponse(response);
          dispatch({ type: GET_APPDEFINITION, payload:apps});
        })
        .catch((e) => {
          // If request is bad...
          // - Show an error to the user
        //   dispatch(authError('Bad Login Info'));
        debugger  
    });
      
};


function transformAppsResponse(response) {
  const datas = response.data.data;
  
  var urls = {
      editor: '/editor/',
      workflow: '/workflow/'
  };


  var defaultApps = [];
  var customApps = [];
  for (var i = 0; i < datas.length; i++) {

      var app = datas[i];
      if (app.defaultAppId !== undefined && app.defaultAppId !== null) {

          // Default app
          if (app.defaultAppId === 'kickstart') {

              defaultApps.push(
                  {
                      id: 'kickstart',
                      titleKey: 'Kickstart App',
                      descriptionKey: 'Create process models, forms and app definitions, then share your models and definitions with other people.',
                      defaultAppId : app.defaultAppId,
                      theme: 'theme-1',
                      icon: 'icon icon-choice',
                      fixedBaseUrl: urls.editor + '/#/',
                      fixedUrl: urls.editor,
                      pages: ['processes', 'forms', 'apps', 'stencils']
                  });

          } else if (app.defaultAppId === 'tasks') {

              defaultApps.push(
                  {
                      id: 'tasks',
                      titleKey: 'Task App',
                      descriptionKey: 'Access your full task list and work on any tasks assigned to you from any process app. Also, start new processes and tasks.',
                      defaultAppId : app.defaultAppId,
                      theme: 'theme-2',
                      icon: 'icon icon-clock',
                      fixedBaseUrl: urls.workflow + '/#/',
                      fixedUrl: urls.workflow,
                      pages: ['tasks', 'processes']
                  });

          }

      } else {

          // Custom app
          //app.icon = 'glyphicon ' + app.icon;
          app.icon = 'icon icon-choice';
          app.theme = 'theme-1';
          app.fixedBaseUrl = '/workflow/#/apps/' + app.deploymentKey + '/';
          app.fixedUrl = app.fixedBaseUrl + 'tasks';
          app.pages = [ 'tasks', 'processes' ];
          app.deletable = true;
          customApps.push(app);
      }

  }

  return defaultApps.concat(customApps); 
}