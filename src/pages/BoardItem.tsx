import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import Modal from '../components/ui/Modal/Modal';
import ModuleContainer from '../components/ui/ModuleContainer/ModuleContainer';
import NewTaskForm from '../components/ui/NewTaskForm/NewTaskForm';
import Wrapper from '../components/ui/Wrapper/Wrapper';
import ModalProvider from '../contexts/ModalContext';
import { Task } from '../utils/constants/types';
import { useAddTasksMutation, useGetTasksQuery, useUpdateTasksMutation } from '../utils/services';

function BoardItem(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>();
  const [error, setError] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);
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
    setIsNew(true);
    handleToggleModal(true);
  };
  const [updateTask, { isSuccess: updateSuccess }] =
    useUpdateTasksMutation();
  const updaterTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    if (updateSuccess) handleToggleModal(false);
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

  const handleUpdate = (taskData: Task) => {
    setIsNew(false);
    handleToggleModal(true);
    setTask(taskData);
  };
  const renderUpdateTask = () =>
    task && <NewTaskForm task={task} updateButton handleUpdate={updaterTask} />;

  const renderNewTask = (taskData: Task[]) => {
    const defaultState: Task = {
      BoardId: Number.parseInt(id!, 10),
      id: taskData[taskData.length - 1].id + 1,
      Title: '',
      Status: 'Todo',
      Assignee: '',
      Reporter: '',
      CreatedAt: Date.now(),
      Comments: [],
      Description: '',
    };
    return (
      <NewTaskForm task={defaultState} saveButton handleSave={saveNewTask} />
    );
  };
  useEffect(() => {
    if (data) getTasks(data);
  }, [data, isNew, task, error]);
  return (
    <ModalProvider>
      <Container width="80%">
        <Wrapper>
          <Button onClick={createNewTask}>New Task</Button>
        </Wrapper>
        {data && <ModuleContainer data={tasks} openTask={handleUpdate} />}
      </Container>
      {isModalOpen && (
        <Modal onClose={() => handleToggleModal(false)}>
          {isNew ? renderNewTask(data!) : renderUpdateTask()}
          {error && <p className="error">{error.message}</p>}
        </Modal>
      )}
    </ModalProvider>
  );
}

export default BoardItem;
