import React, { PropsWithChildren, ReactElement } from 'react';
import { Route } from 'react-router-dom';

function AppRoute({ children }: PropsWithChildren<HTMLElement>): ReactElement {
  return <Route>{children}</Route>;
}
export default AppRoute;
