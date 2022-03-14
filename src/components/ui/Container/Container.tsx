import React, { PropsWithChildren, ReactElement } from 'react';

import StyledContainer from './Style';

interface ContainerProps {
  width: string | number;
}

function Container({
  width,
  children,
}: PropsWithChildren<ContainerProps>): ReactElement {
  return <StyledContainer width={width}>{children}</StyledContainer>;
}

export default Container;
