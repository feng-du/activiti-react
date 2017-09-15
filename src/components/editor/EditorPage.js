import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import AuthRoute from '../auth/AuthRoute';

import { signoutUser } from '../../actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/common/style.css';
import '../../styles/common/style-retina.css';

import '../../libs/editor/editor-app/editor/css/editor.css';
import '../../libs/editor/editor-app/css/style.css';
import '../../libs/editor/styles/style-editor.css';


import '../../libs/jquery-ui-1.10.3.custom.min';
import 'bootstrap/dist/js/bootstrap';




import Navbar from './common/Navbar';
import ProcessPage from './processes/ProcessPage';
import EditProcessPage from './processes/editor-app/EditProcessPage';
import FormPage from './forms/FormPage';
import AppPage from './apps/AppPage';

class EditorPage extends React.Component {
    render() {
        const { user, signoutUser } = this.props;
        if(!user)
            return null;

        return (
            <div>
                <Navbar  name= { user.name } signoutHandler={signoutUser}/>
                <div id="main" className="wrapper full clearfix" style={{height: "100vh"}}>
                    <Switch>
                        <AuthRoute path="/editor/processes/:processId" component={EditProcessPage} />
                        <AuthRoute path="/editor/processes" component={ProcessPage} />
                        <AuthRoute path="/editor/forms" component={FormPage} />
                        <AuthRoute path="/editor/apps" component={AppPage} />

                        <AuthRoute path="/editor" component={ProcessPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { signoutUser })(EditorPage) ;

