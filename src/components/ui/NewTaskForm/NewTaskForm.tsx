import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  PropsWithRef,
  useEffect,
  useState,
} from 'react';

import stages from '../../../utils/constants/kanbanStages';
import { Task } from '../../../utils/constants/types';
import { useAddCommentMutation, useGetCommentsQuery } from '../../../utils/services';
import Button from '../Button/Button';
import StyledForm, { SideBar, StyledFooter } from './Style';

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
  const [newComment, setNewComment] = useState('');

  const { data: comments } = useGetCommentsQuery();
  const [addComment] = useAddCommentMutation();

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      addComment({ taskId: task.id, comment: newComment, user: 'User-1' });
      setNewComment('');
    }
  };

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
      <div className="left_side">
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
      </div>
      <SideBar>
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
      </SideBar>
      <StyledFooter>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleSubmit}
          placeholder={
            saveButton
              ? 'Comment disabled for new Task'
              : 'Enter comments here and press Enter to submit'
          }
          disabled={saveButton}
        />
        <div className="comment_box">
          <div className="comments">
            {comments
              ?.filter((comment) => comment.taskId === task.id)
              .map((comment) => (
                <p key={comment.id}>
                  {comment.user || 'Anonymous'}: {comment.comment}
                </p>
              ))}
          </div>
        </div>
        {saveButton && handleSave && (
          <Button onClick={onSave}>Save Task</Button>
        )}
        {updateButton && handleUpdate && (
          <Button onClick={onUpdate}>Update Task</Button>
        )}
      </StyledFooter>
    </StyledForm>
  );
}

export default NewTaskForm;
