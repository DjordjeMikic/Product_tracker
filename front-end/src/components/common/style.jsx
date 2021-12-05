import styled from 'styled-components';
import { darkBlue, black, blue, light, red, shine, success } from '../../globalStyles/colors';

export const InputContainer = styled.div`
  width: ${props => props.width || '90%'};
  align-items: flex-start !important;
  margin-top: ${props => props.margin ? props.margin : '2%'};
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${black};
`;

export const InputField = styled.input`
  width: 98%;
  font-size: 1rem;
  border: 1px solid ${props => props.color ?  props.color : light};
  border-radius: 9px;
  outline: none;
  padding: 11px;
  background-color: ${props => props.bgColor || ''};
  margin-top: 4px;
  position: relative;
  transition: all 0.4s;
  &:focus {
    border-color: ${blue};
  }
`;

export const UnstyledContainer = styled(InputField)`
  border: none;
  &:focus {
    outline: 1px solid ${blue};
  }
`;

export const Button = styled.button`
  width: 98%;
  font-size: 1rem;
  padding: 11px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 9px;
  color: ${shine};
  background-color: ${blue};
  margin-top: 1%;
  transition: all 0.4s;

  &:hover {
    background-color: ${darkBlue};
  }
`;

export const CheckContainer = styled(InputContainer)`
  flex: 0 0 35%;
  justify-content: flex-start !important;

  label {
    user-select: none;
    margin-left: 2%;
    margin-bottom: 1%;
  }

  input[type=checkbox] {    
    flex: 0 0 9%;
    margin-top: 4px;
    transform: scale(1.6,1.6);
  }
`;

export const TableCheckContainer = styled.div`
  flex: 0 0 100%;
  input[type=checkbox] {    
    flex: 0 0 9%;
    margin-top: 4px;
    transform: scale(1.6,1.6);
  }
`;




export const TareaContainer = styled.textarea`
  width: 98%;
  font-size: 1rem;
  border: 1px solid ${props => props.color ?  props.color : light};
  border-radius: 9px;
  outline: none;
  padding: 11px;
  background-color: ${props => props.bgColor || ''};
  margin-top: 4px;
  resize: none;
  position: relative;
  transition: all 0.4s;
  &:focus {
    border-color: ${blue};
  }
`;

export const SwitchContainer = styled.div`
  height: 28px;
  width: 52px;
  border-radius: 14px;
  background-color: ${props => props.enabled ? success : red};
  position: relative;
`;

export const Show = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: ${shine};
  margin: 0 !important;
  position: absolute;
  top: 1px;
  left: ${props => !props.enabled && '1px'};
  right: ${props => props.enabled && '1px'};
  z-index: 2;
`;

export const DiscountContainer = styled.div`
  border-radius: 9px;
  padding: 4px 11px;
  background-color: ${props => props && props.bgColor};
  color: ${props => props && props.color};
  position: relative;
`