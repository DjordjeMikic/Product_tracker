import styled from 'styled-components';
import { shine, light } from '../../globalStyles/colors';

export const NfContainer = styled.div`
    height: 35%;
    width: 35%;
    color: ${shine};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;

    h1 {
        font-size: 2.6rem;
    }

    a {
        text-decoration: none;
        font-size: 1.6rem;
        color: ${shine};
        transition: all 0.4s;
        
        &:hover {
            color: ${light};
        }
    }
`;