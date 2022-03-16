import React, { MouseEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BoardCell from '../components/ui/BoardCell/BoardCell';
import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import Wrapper from '../components/ui/Wrapper/Wrapper';
import { useAddBoardsMutation, useGetBoardsQuery } from '../utils/services';

function BoardPage(): ReactElement {
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const { data } = useGetBoardsQuery();
  const [addBoard] = useAddBoardsMutation();
  const createBoard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newProjectTitle) {
      const id = data && data.length ? data[data.length - 1].id + 1 : 1;
      addBoard({ id, Title: newProjectTitle });
      setNewProjectTitle('');
    }
  };
  const navigate = useNavigate();

  const linkToBoard = (id: number) => {
    navigate(`/boards/${id}`);
  };

  return (
    <Container width="80%">
      <Wrapper>
        <header>
          <h2>Projects</h2>
          <div className="new_project">
            <input
              type="text"
              maxLength={50}
              onChange={(e) => setNewProjectTitle(e.target.value)}
              value={newProjectTitle}
              placeholder="Enter Project Title Here no more than 50 Characters"
            />
            <Button onClick={createBoard}>Create Project</Button>
          </div>
        </header>
        {data?.map((board) => (
          <BoardCell
            title={board.Title}
            key={board.id}
            id={board.id}
            handleClick={() => linkToBoard(board.id)}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default BoardPage;
