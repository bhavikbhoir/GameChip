import React from 'react';
import { Banner } from './components/Banner';
import { Message } from './components/Message';
import { CardSection } from './components/CardSection';
import { Grid } from './components/Grid';
 
export const Home = () => (
    <React.Fragment>
        <Banner />
        <Grid />
        <Message />
        <CardSection />           
    </React.Fragment>
)