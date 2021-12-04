import styled from 'styled-components';
import { light, lightness, metal, shine } from '../../globalStyles/colors';

export const LayoutContainer = styled.div`
    height: 100vh;
    width: 100%;
    justify-content: flex-start !important;
    background-color: ${lightness};
    position: relative;
`;

export const MainContent = styled.div`
    height: 100%;
    width: 100%;
    justify-content: flex-start !important;    
    padding: 2.4rem 2rem;
    position: relative;
`;

export const Header = styled.header`
    height: 9vh;
    width: 100%;
    align-items: flex-start !important;
    justify-content: space-between !important;
    position: relative;    
`;

export const MenuContainer = styled.div`
    height: auto;
    width: 26%;
    padding: 9px 0;
    border-radius: 9px;
    background-color: ${light};
    position: absolute;
    right: 0;
    transform: translateY(9vh);
    z-index: 9;
`;

export const Line = styled.div`
    width: 100%;
    font-size: 1.2rem;
    padding: 9px 0;
    cursor: pointer;
    border: 1px solid ${metal};
    border-radius: 9px;
    background-color: ${shine};
`;