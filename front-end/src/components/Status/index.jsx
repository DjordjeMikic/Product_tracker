import React from 'react';
import { useClear } from '../../hooks/useClear';
import { lightRed, lightSuccess, red, success } from '../../globalStyles/colors';
import { ModalContainer } from './style';
import { useMe } from '../../hooks/useMe';

export const Success = () => {
    const { clearSuccess } = useClear();
    
    return (
        <ModalContainer className="flex" color={lightSuccess} bgColor={success}>
            <h1>Success</h1>
            <span onClick={clearSuccess}>&times;</span>
        </ModalContainer>
    )
}

export const E = () => {
    const { clearError } = useClear();
    
    return (
        <ModalContainer className="flex" color={lightRed} bgColor={red}>
            <h1>Some Error. Try again</h1>
            <span onClick={clearError}>&times;</span>
        </ModalContainer>
    )
}

export const UserSuccess = ({ status }) => {
    const { clearSuccess } = useMe();

    return (
        <ModalContainer className="flex" color={lightSuccess} bgColor={success}>
            <h1>{status || 'Success'}</h1>
            <span onClick={clearSuccess}>&times;</span>
        </ModalContainer>
    )
}

export const UserE = ({ status }) => {
    const { clearError } = useMe();
    
    return (
        <ModalContainer className="flex" color={lightRed} bgColor={red}>
            <h1>{status || 'Some Error. Try again'}</h1>
            <span onClick={clearError}>&times;</span>
        </ModalContainer>
    )
}