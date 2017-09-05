import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
  
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