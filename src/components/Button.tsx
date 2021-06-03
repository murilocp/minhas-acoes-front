import React from 'react';

import { ButtonContainer } from '../styles/components/Button';

export const Button: React.FC = ({ children }) => {
  return <ButtonContainer type="button">{children}</ButtonContainer>;
};
