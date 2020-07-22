import React from 'react';
import { Container } from '@material-ui/core';
import { useOktaAuth } from '@okta/okta-react';

import Banner from '../../components/Banner/Banner';

const HomeView = () => {

    const { authState } = useOktaAuth();

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Banner />

            <Container maxWidth="lg">
                <h1>Welcome</h1>
                Welcome to the skills management tool.
        </Container>
        </>
    )
}

export default HomeView;