import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

import Banner from '../../components/Banner/Banner';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const RegisterView = () => {
    const classes = useStyles();
    return (
        <>
            <Banner/>
            <Container maxWidth="sm">
                <h2>Register a new account</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField label="Full name" className="text-field"/>
                        <TextField label="Email address" className="text-field"/>
                        <TextField label="password" type="password" className="text-field"/>
                        <TextField label="Retype password" type="password" className="text-field"/>
                    </div>
                    <Button>Register</Button>
                    <Button>Cancel</Button>
                </form>
            </Container>
        </>
    )
}

export default RegisterView;