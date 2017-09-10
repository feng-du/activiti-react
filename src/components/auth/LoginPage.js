import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
  
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style-landing.css'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../../styles/common/style.css';
import '../../styles/common/style-retina.css';

import 'bootstrap/dist/js/bootstrap';

import LoginForm from './LoginForm';

class LoginPage extends React.Component {

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated } = this.props;
        if(authenticated){
            return (
                <Redirect to={from}/>
            );
        }

        return(       
            <div className="login-container">
                <div className="login-left-column"></div>
                <div className="login-right-column">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        authenticated: state.auth.authenticated
    };
  }

export default connect(mapStateToProps)(LoginPage);