import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from '@material-ui/core'

const LoginOption = () => {

    const { authService, authState } = useOktaAuth();

    const login = async () => { authService.login('/'); };
    const logout = async () => { authService.logout('/'); };

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    const securityButton = !authState.isAuthenticated ?
        <Button color="inherit" onClick={login}>Login</Button>
    :
        <Button color="inherit" onClick={logout}>Logout</Button>

    return (
        <>
            Test
            {securityButton}
        </>
            
    );
}

export default LoginOption;