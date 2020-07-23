// src/LoginForm.jsx

import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';

const LoginForm = ({ issuer }) => {
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const oktaAuth = new OktaAuth({ issuer: issuer });
    oktaAuth.signIn({ username, password })
    .then(res => {
      setSessionToken(res.sessionToken);
      // sessionToken is a one-use token, so make sure this is only called once
      authService.redirect({ sessionToken });
    })
    .catch(err => console.log('Found an error', err));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          id="username" type="text"
          value={username}
          onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          id="password" type="password"
          value={password}
          onChange={handlePasswordChange} />
      </label>
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};
export default LoginForm;