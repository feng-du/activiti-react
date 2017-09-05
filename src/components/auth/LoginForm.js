import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';

import * as actions from '../../actions/authActions';

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.signinUser(values);
    }

    renderError() {
        const { errorMessage } = this.props;

        return (
            errorMessage && <p className="login-error">{errorMessage}</p>
        );
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return(
            <form className="form clearfix login-form" role="form" onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                    <Field name="username" type="text" className="form-control" component="input"/>
                </div>
                <div className="form-group">
                    <Field type="password" className="form-control" name="password" component="input"/>
                </div>
                <div className="btn-group pull-right">
                    <button id="login" type="submit" className="btn btn-default" disabled={submitting} >
                        Sign in
                    </button>
                </div>
                {this.renderError()}
            </form>

        );
    }
}

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error
    };
  }

export default reduxForm({
    form: 'loginForm'
})(connect(mapStateToProps, actions)(LoginForm));