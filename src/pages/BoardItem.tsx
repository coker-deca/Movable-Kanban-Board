import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/ui/Container/Container';

function BoardItem(): ReactElement {
  const { id } = useParams();
  return <Container width="80%">{id}</Container>;
}

export default BoardItem;
