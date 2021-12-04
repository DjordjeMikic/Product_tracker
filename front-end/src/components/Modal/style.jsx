import styled from 'styled-components';
import { blue, lightness, red, shine } from '../../globalStyles/colors';

export const ModalContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(255,255,255,0.4);
    filter: blur(6px);
    position: absolute;
    top: 0;
    left: 0;
`;

export const ModalContent = styled.div`
    height: 35%;
    width: 29%;
    justify-content: space-evenly !important;
    background-color: ${shine};
    border-radius: 9px;
    padding: 2.4rem 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    
    h1 {
        color: ${blue}; 
    }
`;

export const Mark = styled.span`
    font-weight: 600;
    color: ${red};
`;

export const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    outline: none;
    border-radius: 9px;
    color: ${props => props && props.color};
    background-color: ${props => props.bgColor ? props.bgColor : lightness};
    transition: all 0.4s;

    &:hover {
        filter: brightness(44%);
    }
`;

export const Circle = styled.div`
    height: 41px;
    width: 41px;
    border-radius: 50%;
    background-color: ${props => props.bgColor ? props.bgColor : lightness};
    position: relative;
`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;