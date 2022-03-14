import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

import StyledWrapper from './Style';

function Wrapper({ children }: PropsWithChildren<ReactNode>): ReactElement {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
