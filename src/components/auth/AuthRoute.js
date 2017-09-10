import React from 'react'
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';

class AuthRoute extends React.Component {
    render() {
        const { component: Component, authenticated, ...rest } = this.props;

        return (
            <Route {...rest} render={props => (
                authenticated ? (
                <Component {...props}/>
                ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
                )
          )}/>
        );
    }
}

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  export default connect(mapStateToProps)(AuthRoute);