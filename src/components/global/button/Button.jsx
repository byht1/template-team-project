import React from 'react';
import { LigthBtn, DarkBtn } from './Button.styled';
import { propTypeButton } from './type';

export const Button = ({ children, theme, ...props }) => {
  return (
    <>
      {theme === 'dark' 
      ? <DarkBtn {...props}>{children}</DarkBtn> 
      : <LigthBtn {...props}>{children}</LigthBtn>}
    </>
  )

};

Button.propTypes = propTypeButton;
