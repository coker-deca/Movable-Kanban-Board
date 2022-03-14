/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, PropsWithChildren, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

import { PortalContainer } from '../components/ui/Portal/Style';

interface ModalContextProps {
  node: Element;
}

export const ModalContext = createContext<Partial<ModalContextProps>>({});

function ModalProvider({
  children,
}: PropsWithChildren<ReactNode>): ReactElement {
  const modalRef = useRef(null);
  const [context, setContext] = useState<Element>();

  useEffect(() => {
    setContext(modalRef.current!);
  }, []);

  return (
    <PortalContainer>
      <ModalContext.Provider value={{ node: context }}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </PortalContainer>
  );
}

export default ModalProvider;
