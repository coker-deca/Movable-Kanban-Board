import React, { ChangeEvent, ChangeEventHandler, MouseEvent, MouseEventHandler, PropsWithRef, useState } from 'react';

import stages from '../../../constants/kanbanStages';
import { Task } from '../../../constants/types';
import Button from '../Button/Button';
import StyledForm from './Style';

interface NewTaskProps {
  boardId: number;
  nextTaskId: number;
  handleSave: (task: Task) => void;
}
function NewTaskForm({
  boardId,
  nextTaskId,
  handleSave,
}: PropsWithRef<NewTaskProps>) {
  const defaultState: Task = {
    BoardId: boardId,
    id: nextTaskId,
    Title: '',
    CreatedAt: Date.now(),
  };

  const [newTask, setNewTask] = useState<Task>(defaultState);

  const onclick: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSave(newTask);
  };
  const handleFormUpdate: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const field = e.target;
    const { name, value } = field;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StyledForm>
      <div className="input">
        <label htmlFor="Title">
          Title:
          <input
            type="text"
            value={newTask.Title}
            name="Title"
            onChange={handleFormUpdate}
          />
        </label>
      </div>
      <br />
      <div className="input">
        <label htmlFor="Description">
          Description:
          <textarea
            value={newTask.Description}
            name="Description"
            onChange={handleFormUpdate}
          />
        </label>
      </div>
      <br />
      <div className="input">
        <label htmlFor="Status">
          Status:
          <select
            name="Status"
            value={newTask.Status || 'Todo'}
            onChange={handleFormUpdate}
          >
            {stages.map((stage) => (
              <option value={stage} key={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>
      </div>
      <br />
      <div className="input">
        <label htmlFor="Assignee">
          Assignee:
          <input
            type="text"
            value={newTask.Assignee}
            name="Assignee"
            onChange={handleFormUpdate}
          />
        </label>
      </div>
      <br />
      <div className="input">
        <label htmlFor="Reporter">
          Reporter:
          <input
            type="text"
            value={newTask.Reporter}
            name="Reporter"
            onChange={handleFormUpdate}
          />
        </label>
      </div>
      <Button onClick={onclick}>Save Task</Button>
    </StyledForm>
  );
}

export default NewTaskForm;
