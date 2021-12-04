import styled from 'styled-components';
import {
    blue,
    darkBlue,
    light,
    lightness,
    shine,
    success
} from '../../../../globalStyles/colors';
import { Container } from '../Products/style';

export const AddContainer = styled(Container).attrs({
    as: 'form'
})`
    align-items: flex-start !important;
`;

export const Left = styled.div`
    flex: 0 0 67%;
`;

export const Right = styled.div`
    flex: 0 0 33%;
    
    div {
        margin: 4% 0;
    }
`;

export const Flex = styled.div`
    width: 90%;
    justify-content: space-between !important;
    gap: 16px;
`;

export const Btn = styled.button`
    width: 90%;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 11px;
    border-radius: 9px;
    color: ${shine};
    background-color: ${blue};
    margin-top: 11%;
    transition: all 0.4s;

    &:hover {
        background-color: ${darkBlue};
    }

    p {
        padding-top: 4px;
    }

    svg {
        margin-right: 4%;
    }
`;

export const FileDropContainer = styled.div`
    height: 250px;
    width: 88%;
    border: 2px dashed ${light};
    background-color: ${props => props.active && success};
    color: ${props => props.active && shine};
    border-radius: 9px;
    margin-right: 16px;
    margin-top: 2%;
    position: relative;
    transition: all 0.4s;

    div {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    } 

    img {
        height: 90%;
        width: 90%;
        object-fit: contain;
        z-index: 1;
    }
`;

export const DateCardContainer = styled.div`
    height: 127px;
    width: 88%;
    border-radius: 9px;
    padding: 2.6rem 4rem;
    background-color: ${lightness};
    margin-top: 4%;
    position: relative;

    p {
        font-size: 0.9rem;
    }

    .flex {
        width: 100%;
        justify-content: space-between !important;
        margin: 2% 0;
    }
`;