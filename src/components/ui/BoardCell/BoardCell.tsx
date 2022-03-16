import React, { KeyboardEvent, ReactElement, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { IoMdTrash } from 'react-icons/io';

import { useDeleteBoardMutation, useUpdateBoardMutation } from '../../../utils/services';
import StyledCell from './Style';

interface CellProps {
  title: string;
  id: number;
  handleClick: () => void;
}

function BoardCell({ title, handleClick, id }: CellProps): ReactElement {
  const [disableTitle, setDisableTitle] = useState(true);
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const [updateBoard] = useUpdateBoardMutation();
  const [deleteBoard] = useDeleteBoardMutation();

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      updateBoard({ id, Title: updatedTitle });
      setDisableTitle(true);
    }
  };

  return (
    <StyledCell onClick={handleClick}>
      <input
        onClick={(e) => e.stopPropagation()}
        className="child"
        placeholder="Type a new Title"
        type="text"
        disabled={disableTitle}
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <div className="toolbox">
        &nbsp;
        <FiEdit2
          className="child"
          onClick={(e) => {
            e.stopPropagation();
            setDisableTitle(false);
          }}
        />
        &nbsp;
        <IoMdTrash
          onClick={(e) => {
            e.stopPropagation();
            deleteBoard(id);
          }}
          className="child"
        />
      </div>
    </StyledCell>
  );
}

export default BoardCell;
