import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import Modal from '../components/ui/Modal/Modal';
import ModuleContainer from '../components/ui/ModuleContainer/ModuleContainer';
import Wrapper from '../components/ui/Wrapper/Wrapper';
import { Task } from '../constants/types';
import ModalProvider from '../contexts/ModalContext';
import { useGetTasksQuery } from '../services';

function BoardItem(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetTasksQuery();
  const { id } = useParams();
  const getTasks = (dataArray: Task[]) => {
    const filteredTasks = dataArray.filter(
      (item) => item.BoardId === Number.parseInt(id!, 10)
    );
    setTasks(filteredTasks);
  };
  const handleToggleModal = (state: boolean) => {
    setIsModalOpen(state);
  };
  const createNewTask = () => {
    handleToggleModal(true);
  };

  useEffect(() => {
    if (data) getTasks(data);
  }, [data]);
  return (
    <ModalProvider>
      <Container width="80%">
        <Wrapper>
          <Button onClick={createNewTask}>New Task</Button>
          {data && <ModuleContainer data={tasks} />}
        </Wrapper>
      </Container>
      {isModalOpen && (
        <Modal onClose={() => handleToggleModal(false)}>ModalisOpen</Modal>
      )}
    </ModalProvider>
  );
}

export default BoardItem;
