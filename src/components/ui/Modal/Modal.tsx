/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren, ReactElement, useRef } from 'react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Portal from '../Portal/Portal';
import { Dialog } from './Style';

function Modal({
  onClose,
  children,
}: PropsWithChildren<{ onClose: () => void }>): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => onClose());
  return (
    <Portal>
      <Dialog ref={ref}>
        <span className="close" onClick={onClose}>
          x
        </span>
        <div className="content-wrapper">{children}</div>
      </Dialog>
    </Portal>
  );
}

export default Modal;
