import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './components/Home';

const Routes = () => {
    return (
        <Router>
            <Header/>
            <Route path="/" component={Home} exact />
            {/* <Route path="/artist/:artistId" component={Artist} exact/>
            <Route path="/" component={Home} exact/> */}
        </Router>
    )
}

export default Routes;