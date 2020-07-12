import React from 'react';

import { TextField, Container, Button } from '@material-ui/core';
import Banner from '../../components/Banner/Banner';

const LoginView = () => (
    <>
        <Banner/>
        <Container maxWidth="sm">
            <h1>Login</h1>
            <form>
                <div>
                    <TextField label="Email address" className="text-field">></TextField>
                    <TextField label="password" type="password" className="text-field"></TextField>
                </div>
                <Button>Login</Button>
                <Button>Cancel</Button>
            </form>
        </Container>
    </>
)

export default LoginView;