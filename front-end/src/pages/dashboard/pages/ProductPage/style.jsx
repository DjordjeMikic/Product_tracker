import styled from 'styled-components';
import { blue, light, metal } from '../../../../globalStyles/colors';
import { Container } from '../Products/style';

export const ProductContainer = styled(Container)`
    height: 86vh;
    margin-top: 1%;
`

export const ImageContainer = styled.div`
    height: 34%;
    width: 100%;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 9px;
    }
`;

export const Row = styled.div`
    height: 9%;
    width: 100%;
    justify-content: space-between !important;
    margin-top: 2%;

    h1 {
        margin-bottom: 4%;
    }

    p {
        color: ${blue};
    }
`;

export const DataContainer = styled.div`
    height: 100%;
    justify-content: space-between !important;
    flex: 0 0 62%;
    border-radius: 9px;
    padding: 9px;
    background-color: ${light};
`;

export const Property = styled.div`
    height: 100%;
    padding: 0 16px;
    
    h4 {
        padding-left: 6px;
    }
    
    svg {
        height: 62%;
        opacity: 0.6;
    }
`;

export const BtnBox = styled.div`
    height: 41px;
    width: 41px;
    border-radius: 9px;
    background-color: ${props => props && props.bgColor};
`;

export const Desc = styled.p`
    width: 100%;
    text-align: left;
    color: ${metal};
    margin-top: 4%;
`