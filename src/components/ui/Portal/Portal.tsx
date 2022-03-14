import React, { PropsWithChildren, ReactElement, ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../../../contexts/ModalContext';
import { Overlay } from './Style';

function Portal({
  children,
}: PropsWithChildren<ReactNode>): ReactElement | null {
  const modalNode = useContext(ModalContext).node;

  return modalNode
    ? createPortal(<Overlay>{children}</Overlay>, modalNode)
    : null;
}

export default Portal;
