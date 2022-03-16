import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import BoardCell from '../components/ui/BoardCell/BoardCell';
import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import Wrapper from '../components/ui/Wrapper/Wrapper';
import { useGetBoardsQuery } from '../utils/services';

function BoardPage(): ReactElement {
  const { data } = useGetBoardsQuery();
  const navigate = useNavigate();

  const linkToBoard = (id: number) => {
    navigate(`/boards/${id}`);
  };

  return (
    <Container width="80%">
      <Wrapper>
        <Button>Add Board</Button>
        {data?.map((board) => (
          <BoardCell
            title={board.Title}
            key={board.id}
            handleClick={() => linkToBoard(board.id)}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default BoardPage;
