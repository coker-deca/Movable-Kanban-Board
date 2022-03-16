/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Draggable from 'react-draggable';
import { CgOptions } from 'react-icons/cg';

import { Task } from '../../../constants/types';
import date from '../../lib/date';
import MovableStyledCard from './Style';

interface DragProps {
  handleDrag: (e: any, ui: any) => void;
  task: Task;
  openTask: (task: Task) => void;
}

const Card = React.forwardRef<
  HTMLDivElement,
  DragProps & Omit<JSX.IntrinsicElements['div'], 'ref'>
>(({ handleDrag, task, openTask }, ref) => (
  <Draggable
    cancel=".cancel"
    key={task.id}
    bounds={{ left: 0, top: 0 }}
    onDrag={handleDrag}
    nodeRef={ref as React.RefObject<HTMLDivElement>}
  >
    <MovableStyledCard ref={ref}>
      <div className="card">
        <div className="cancel" onClick={() => openTask(task)}>
          <span>{task.Title}</span>
          <CgOptions />
        </div>
        <div className="cancel" onClick={() => openTask(task)}>
          <span>{date.formatDate(task.CreatedAt)}</span>
          <span>{task.Status}</span>
        </div>
      </div>
    </MovableStyledCard>
  </Draggable>
));

export default Card;
