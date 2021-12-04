import styled from 'styled-components';
import { black, blue } from '../../globalStyles/colors';

export const PasswordContainer = styled.div`
    width: 90%;
    justify-content: space-between;
    padding-right: 6px;
    
    input {
        flex: 0 0 44%;
    }
`;

export const OtherOption = styled.p`
    font-size: 0.9rem;
    margin-top: 2%;
    
    a {
        text-decoration: none;
        font-weight: bold;
        color: ${blue};
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Forgot = styled.p`
    font-size: 0.8rem;
    color: ${black};
    margin-top: 1.8%;
    margin-right: 1.75%;
`;