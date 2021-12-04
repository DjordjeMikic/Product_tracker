import React from 'react';

import {
  InputContainer,
  Label,
  InputField,
  Button,
  CheckContainer,
  UnstyledContainer,
  TableCheckContainer,
  TareaContainer,
  SwitchContainer,
  Show
} from './style';

export const Input = ({ info, color, bgColor, ...rest }) => {
  return (
    <InputContainer className="flex column">
      <Label htmlFor={info}>{info}</Label>
      <InputField id={info} color={color} bgColor={bgColor} {...rest} />
    </InputContainer>
  )
}

export const UnstyledInput = ({ color, ...rest }) => {
  return (
    <InputContainer className="flex" margin="0">
      <UnstyledContainer color={color} {...rest} />
    </InputContainer>
  )
}

export const Submit = ({ info }) => {
  return (
    <InputContainer>
      <Button>{info}</Button>
    </InputContainer>
  )
}

export const CheckBox = ({ info }) => {
  return (
    <CheckContainer className="flex" width="44%">
      <input type="checkbox" id={info} />
      <Label htmlFor={info}>{info}</Label>
    </CheckContainer>
  )
}

export const TableCheckBox = ({ ...rest }) => {
  return (
    <TableCheckContainer className="flex">
      <input type="checkbox" {...rest} />
    </TableCheckContainer>
  )
}

export const Tarea = ({ info, ...rest }) => (
  <InputContainer>
    <Label htmlFor={info}>{info}</Label>
    <TareaContainer id={info} {...rest}></TareaContainer>
  </InputContainer>
);

export const SwitchCheckBox = ({ enabled, enableSwitch }) => {
  return (
    <SwitchContainer enabled={enabled} onClick={enableSwitch}>
      <Show enabled={enabled}></Show>
    </SwitchContainer>
  )
}