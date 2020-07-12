import React from 'react';
import { Container } from '@material-ui/core';

import Banner from '../../components/Banner/Banner';

const HomeView = () => (
    <>
        <Banner/>
        <Container maxWidth="lg">
            <h1>Welcome</h1>
            Welcome to the skills management tool.
        </Container>
    </> 
)

export default HomeView;