import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './components/General/NavigationBar';
import HomeView from './views/Home/HomeView';
import LoginView from './views/Profile/LoginView';

import RegisterView from './views/Profile/RegisterView';

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={HomeView} exact />
            <Route path="/register" component={RegisterView} exact/>
            <Route path="/login" component={LoginView} exact/>
            {/* <Route path="/artist/:artistId" component={Artist} exact/>
            <Route path="/" component={Home} exact/> */}
        </Router>
    )
}

export default Routes;