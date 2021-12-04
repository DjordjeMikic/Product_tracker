import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 50%;
    justify-content: space-between !important;
    color: ${props => props && props.color};
    background-color: ${props => props && props.bgColor};
    padding: 16px;
    border-radius: 9px;
    margin-top: 2%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    
    span {
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.4s;
                
        &:hover {
            filter: brightness(28%);
        }
    } 
`