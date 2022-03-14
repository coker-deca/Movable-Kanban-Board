import React, { ReactElement } from 'react';

import StyledCell from './Style';

interface CellProps {
  title: string;
  handleClick: () => void;
}

function BoardCell({ title, handleClick }: CellProps): ReactElement {
  return (
    <StyledCell width="200px" onClick={handleClick}>
      <h2>{title}</h2>
    </StyledCell>
  );
}

export default BoardCell;
