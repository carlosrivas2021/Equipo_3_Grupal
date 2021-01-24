import React from "react";
import { Container, InputComponent, LabelIcon } from "./style";
/*The children props is for some icon */
const Input = ({ name, type, placeholder, children, handlerValue }) => {
  const handlerState = (e) => {
    handlerValue(pre => ({
      ...pre,
      [name]: e.target.value,
    }))
  } 
  return (
    <Container>
      <LabelIcon htmlFor={name}>{children}</LabelIcon>
      <InputComponent
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handlerState}
      />
    </Container>
  );
};

export default Input;
