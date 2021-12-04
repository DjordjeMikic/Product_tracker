import styled from 'styled-components';
import { shine, black, blue, light, darkBlue } from '../../globalStyles/colors';

export const SideBarContainer = styled.div`
    height: 100%;
    justify-content: flex-start !important;
    flex: 0 0 16%;
    padding: 2.4rem 1.5rem;
    background-color: ${shine};
    position: relative;
`;

export const ImageContainer = styled.div`
    height: ${props => props && props.height};
    max-height: 9vh;
    width: 100%;
    margin-bottom: ${props => props && props.margin};
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;

export const Arrow = styled.div`
    height: 28px;
    width: 28px;
    font-size: 1.1rem;
    border-radius: 50%;
    cursor: pointer;
    color: ${shine};
    background-color: ${blue};
    position: absolute;
    top: 50%;
    right: ${props => !props.sm ? '-1.5rem' : '0rem'};
    transform: translate(50%, -50%);
    z-index: 1;
    transition: all 0.4s;

    p {
        height: 100%;
        line-height: 26px;
    }

    &:hover {
        background-color: ${darkBlue};
    }
`;

export const Desc = styled.p`
    width: 100%;    
    font-size: 0.9rem;
    text-transform: uppercase;
    margin: 14% 0;
`;

export const LinkContainer = styled.div`
    width: 100%;
    justify-content: flex-start !important;    
    padding-bottom: ${props => props.sm ? props.sm : '14%'};
    position: relative;

    a {
        height: 100%;
        width: 100%;
        justify-content: flex-start !important;
        text-decoration: none;
        font-size: 1.1rem;
        opacity: 0.4;
        color: ${black};
    }

    img {
        height: 23px;
        width: 23px;
        object-fit: contain;
        margin-right: 4%;
    }
`;

export const SmNavContainer = styled.div`
    height: 100vh;
    width: 44px;
    justify-content: flex-start !important;
    padding: 2.4rem 0;
    background-color: ${shine};
    position: relative;

    a {
        justify-content: center !important;
    }
`;

export const CardContainer = styled.div`
    min-height: 9vh;
    width: calc(100% - 3rem);
    align-items: flex-start !important;
    justify-content: space-evenly !important;
    border-radius: 9px;
    padding: 23px;
    color: ${shine};
    background-color: ${blue};
    position: absolute;
    left: 1.5rem;
    bottom: 2.4rem;
    
    p {
        text-transform: capitalize;
        color: ${light};
    }
`;

export const Mail = styled.div`
    font-size: 0.9rem;
    background-color: ${light};
    color: ${black};
    padding: 9px;
    border-radius: 9px;
    margin-top: 9%;

    a {
        height: 100%;
        width: 100%;
        display: block;
        color: ${black};
        text-decoration: none;
    }
`;