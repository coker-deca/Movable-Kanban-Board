/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import StyledButton from './Style';

function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>): ReactNode {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}
export default Button;
