import React from 'react';
import { Link } from 'react-router-dom';
import StartLayout from '../../components/StartLayout';
import { NfContainer } from './style';

const NotFound = () => (
    <StartLayout className="flex column">
        <NfContainer className="flex column">                
            <h1>Not Found Page</h1>
            <Link to="/">Go Home</Link>
        </NfContainer>
    </StartLayout>
)

export default NotFound;