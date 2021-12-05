import styled from 'styled-components';
import { black, light, lightness, metal } from '../../globalStyles/colors';

export const TableContainer = styled.table`
    max-height: 91vh;
    width: 100%;
    border-collapse: collapse;
    /* overflow: auto; */
    margin-top: 2%;
`;

export const TableHeaderContainer = styled.thead`
    height: 6%;
    width: 100%;    
    color: ${metal};
    background-color: ${lightness};
`;

export const TableBodyContainer = styled.tbody`
    height: 6%;
    width: 100%;    
    color: ${black};
    background-color: ${props => props && props.color};
`;

export const Tr = styled.tr`    
    height: 4%;
    width: 100%;
    background-color: ${props => props && props.color};
`;

export const TableField = styled.td`
    width: ${props => props.width ? props.width : '15.5%'};
    display: inline-flex;
    justify-content: flex-start !important;
    padding: 11px 0;
`;

export const OptionsContainer = styled(TableField)`
    color: ${light};

    a {
        text-decoration: none;
        padding-top: 2px;
        margin-right: 11%;
    }

    img {
        opacity: 0.44;
        margin-right: 11%;
        transition: all 0.4s;
        &:hover {
            opacity: 1;
        }
    }
`;