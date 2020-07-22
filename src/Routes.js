import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';

import HomeView from './views/Home/HomeView';
import LoginView from './views/Profile/LoginView';

import RegisterView from './views/Profile/RegisterView';

const Routes = () => {
    return (
        <Router>
            <Security
                issuer='https://dev-176587.okta.com/oauth2/default'
                clientId={process.env.REACT_APP_OKTA_CLIENT_ID}
                redirectUri={window.location.origin + '/implicit/callback'}>

                    <Route path="/" component={HomeView} exact />
                    <Route path="/register" component={RegisterView} exact />
                    <SecureRoute path="/protected" component={LoginView} exact />
                    <Route path="/login" component={LoginView} exact />
                    <Route path="/implicit/callback" component={LoginCallback} exact />
            </Security>
        </Router>
    )
}

export default Routes;