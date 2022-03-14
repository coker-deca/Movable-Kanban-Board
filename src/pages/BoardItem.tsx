import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import Modal from '../components/ui/Modal/Modal';
import ModuleContainer from '../components/ui/ModuleContainer/ModuleContainer';
import NewTaskForm from '../components/ui/NewTaskForm/NewTaskForm';
import Wrapper from '../components/ui/Wrapper/Wrapper';
import { Task } from '../constants/types';
import ModalProvider from '../contexts/ModalContext';
import { useAddTasksMutation, useGetTasksQuery } from '../services';

function BoardItem(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetTasksQuery();
  const { id } = useParams();
  const [add, { isSuccess, error: fetchError }] = useAddTasksMutation();
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
  const saveNewTask = async (newTask: Task) => {
    try {
      if (newTask.Title) {
        const payload = await add(newTask).unwrap();
        setTasks((prev) => [...prev, payload]);
        if (isSuccess) handleToggleModal(false);
      } else {
        setError({ message: 'Please Enter a Title' });
      }
    } catch (e) {
      setError(e || fetchError);
    }
  };

  useEffect(() => {
    if (data) getTasks(data);
  }, [data, error]);
  return (
    <ModalProvider>
      <Container width="80%">
        <Wrapper>
          <Button onClick={createNewTask}>New Task</Button>
        </Wrapper>
        {data && <ModuleContainer data={tasks} />}
      </Container>
      {isModalOpen && (
        <Modal onClose={() => handleToggleModal(false)}>
          {data && id && (
            <NewTaskForm
              boardId={Number.parseInt(id, 10)}
              nextTaskId={data[data.length - 1].id + 1}
              handleSave={saveNewTask}
            />
          )}
          <p className="error">{error && error.message}</p>
        </Modal>
      )}
    </ModalProvider>
  );
}

export default BoardItem;
