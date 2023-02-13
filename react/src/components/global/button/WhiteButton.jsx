import React from 'react';

import { WhiteButtonBox } from './Button.styled';
import { propTypeButton } from './type';

export const WhiteButton = ({ children, ...props }) => {
  return <WhiteButtonBox {...props}>{children}</WhiteButtonBox>;
};

WhiteButton.propTypes = propTypeButton;
