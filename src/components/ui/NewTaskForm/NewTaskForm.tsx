import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  PropsWithRef,
  useEffect,
  useState,
} from 'react';

import stages from '../../../constants/kanbanStages';
import { Task } from '../../../constants/types';
import Button from '../Button/Button';
import StyledForm from './Style';

interface NewTaskProps {
  task: Task;
  saveButton?: boolean;
  handleSave?: (task: Task) => void;
  updateButton?: boolean;
  handleUpdate?: (task: Task) => void;
}
function NewTaskForm({
  task,
  saveButton,
  updateButton,
  handleSave,
  handleUpdate,
}: PropsWithRef<NewTaskProps>) {
  const [newTask, setNewTask] = useState<Task>(task);

  const onSave: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleSave) handleSave(newTask);
  };
  const onUpdate: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleUpdate) handleUpdate(newTask);
  };
  const handleFormUpdate: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const field = e.target;
    const { name, value } = field;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setNewTask(task);
  }, [task]);

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
      {saveButton && handleSave && <Button onClick={onSave}>Save Task</Button>}
      {updateButton && handleUpdate && (
        <Button onClick={onUpdate}>Update Task</Button>
      )}
    </StyledForm>
  );
}

export default NewTaskForm;
