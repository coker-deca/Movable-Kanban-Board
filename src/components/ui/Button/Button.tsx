/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import StyledButton from './Style';

function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>): ReactElement {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
