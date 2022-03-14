import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import ModuleContainer from '../components/ui/ModuleContainer/ModuleContainer';
import Wrapper from '../components/ui/Wrapper/Wrapper';
import { Task } from '../constants/types';
import { useGetTasksQuery } from '../services';

function BoardItem(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { data } = useGetTasksQuery();
  const { id } = useParams();
  const getTasks = (dataArray: Task[]) => {
    const filteredTasks = dataArray.filter(
      (item) => item.BoardId === Number.parseInt(id!, 10)
    );
    setTasks(filteredTasks);
  };

  useEffect(() => {
    if (data) getTasks(data);
  }, [data]);
  return (
    <Container width="80%">
      <Wrapper>
        <Button>New Task</Button>
        {data && <ModuleContainer data={tasks} />}
      </Wrapper>
    </Container>
  );
}

export default BoardItem;
