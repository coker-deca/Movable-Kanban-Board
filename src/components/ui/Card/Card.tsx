/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { IoMdTrash } from 'react-icons/io';

import { Task } from '../../../utils/constants/types';
import { useDeleteTaskMutation } from '../../../utils/services';
import date from '../../lib/date';
import MovableStyledCard from './Style';

interface DragProps {
  handleDrag: (task: Task, ui: any) => void;
  task: Task;
  openTask: (task: Task) => void;
  dragHandlers: any;
  activeDrags: number;
}

const Card = React.forwardRef<
  HTMLDivElement,
  DragProps & Omit<JSX.IntrinsicElements['div'], 'ref'>
>(({ handleDrag, task, openTask, dragHandlers }, ref) => {
  const onDrag: DraggableEventHandler = (e, ui) => {
    handleDrag(task, ui);
  };
  const [deleteTask, { isSuccess }] = useDeleteTaskMutation();

  return (
    <Draggable
      cancel=".cancel"
      key={task.id}
      disabled={isSuccess}
      bounds={{ left: 0, top: 0, bottom: 500, right: 820 }}
      onDrag={onDrag}
      nodeRef={ref as React.RefObject<HTMLDivElement>}
      {...dragHandlers}
    >
      <MovableStyledCard ref={ref}>
        <div className="card">
          <div className="cancel">
            <span onClick={() => openTask(task)}>{task.Title}</span>
            <IoMdTrash onClick={() => deleteTask(task.id)} />
          </div>
          <div className="cancel" onClick={() => openTask(task)}>
            <span>{date.formatDate(task.CreatedAt)}</span>
            <span>{task.Status}</span>
          </div>
        </div>
      </MovableStyledCard>
    </Draggable>
  );
});

export default Card;
