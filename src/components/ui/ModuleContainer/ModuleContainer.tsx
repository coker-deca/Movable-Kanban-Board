/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react';
import { DraggableData, DraggableEventHandler } from 'react-draggable';
import { CgOptions } from 'react-icons/cg';

import stages from '../../../utils/constants/kanbanStages';
import { Task } from '../../../utils/constants/types';
import { useUpdateTasksMutation } from '../../../utils/services';
import Card from '../Card/Card';
import StyledModuleContainer from './Style';

function ModuleContainer({
  data,
  openTask,
}: PropsWithChildren<{
  openTask: (task: Task) => void;
  data: Task[];
}>): ReactElement {
  const nodeRef = useRef<HTMLDivElement>();
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const MODULE_WIDTH = 164;
  const [updateTask, { isSuccess: updateSuccess }] = useUpdateTasksMutation();

  const moveTask = (index: number, task: Task) => {
    const updatedTask: Task = { ...task, Status: stages[index + 1] };
    updateTask(updatedTask);
  };

  const onStart: DraggableEventHandler = () => {
    console.log('start');
    setActiveDrags((prev) => ++prev);
  };

  const onStop: DraggableEventHandler = () => {
    console.log('stop');
    setActiveDrags((prev) => --prev);
  };

  const dragHandlers = { onStart, onStop };
  const handleDrag = (task: Task, ui: DraggableData) => {
    setDeltaPosition((prev) => ({
      x: prev.x + ui.deltaX,
      y: prev.y + ui.deltaY,
    }));
    if (deltaPosition.x % MODULE_WIDTH > 100) {
      const index = stages.indexOf(task.Status);
      moveTask(index, task);
    }
  };
  const renderTasks = (tasks: Task[], stage: string) =>
    tasks
      .filter((item) => item.Status === stage)
      .map((item) => (
        <Card
          handleDrag={handleDrag}
          key={item.id}
          task={item}
          ref={nodeRef as React.RefObject<HTMLDivElement>}
          openTask={openTask}
          dragHandlers={dragHandlers}
          activeDrags={activeDrags}
        />
      ));

  useEffect(() => {}, [deltaPosition, updateSuccess]);

  return (
    <StyledModuleContainer width="90%">
      {stages.map((stage) => (
        <div className="module" key={stage}>
          <div className="header">
            <h2>{stage}</h2>
            <CgOptions />
          </div>

          {renderTasks(data, stage)}
        </div>
      ))}
    </StyledModuleContainer>
  );
}

export default ModuleContainer;
