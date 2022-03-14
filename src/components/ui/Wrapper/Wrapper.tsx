import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

import StyledContainer from './Style';

function Container({ children }: PropsWithChildren<ReactNode>): ReactElement {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
