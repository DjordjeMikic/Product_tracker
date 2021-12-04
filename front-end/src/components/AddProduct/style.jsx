import styled from 'styled-components';
import { blue, shine } from '../../globalStyles/colors';

export const AddProductContainer = styled.div`
    height: 9%;
    width: 100%;
    align-items: flex-start !imporant;
    justify-content: space-between !important;
`;

export const AddBtn = styled.button`
    flex: 0 0 14%;
    font-size: 1rem;
    border: none;
    outline: none;
    border-radius: 9px;
    padding: 5px 19px;
    color: ${shine};
    background-color: ${blue};
    margin-top: 4px;
    
    p {
        font-size: 1.75rem;
        margin-right: 8%;
    }

    a {        
        width: 100%;
        text-decoration: none;
        color: ${shine};
    }
`;