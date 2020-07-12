import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        backgroundColor: 'primary',
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        color: 'secondary',
    },
}));



const Banner = () => {

    const classes = useStyles();
    const history = useHistory();

    const login = () => {
        history.push('/login');
    }

    const register = () => {
        history.push('/register');
    }

    const goHome = () => {
        history.push('/');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} onClick={goHome}>
                        Skills Management
                    </Typography>
                    <Button color="inherit" onClick={login}>Login</Button>
                    <Button color="inherit" onClick={register}>Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Banner;
