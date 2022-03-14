/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

import stages from '../../../constants/kanbanStages';
import { Task } from '../../../constants/types';
import StyledModuleContainer from './Style';

function ModuleContainer({
  data,
}: PropsWithChildren<{ data: Task[] }>): ReactElement {
  const nodeRef = useRef(null);
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const onStart = () => {
    setActiveDrags((prev) => ++prev);
  };

  const onStop = () => {
    setActiveDrags((prev) => --prev);
  };
  const dragHandlers = { onStart, onStop };
  const handleDrag = (e: any, ui: { deltaX: number; deltaY: number }) => {
    console.log(e);
    setDeltaPosition((prev) => ({
      x: prev.x + ui.deltaX,
      y: prev.y + ui.deltaY,
    }));
  };
  const renderTasks = (task: Task[], stage: string) =>
    task
      .filter((item) => item.Status === stage)
      .map((item) => (
        <Draggable
          key={item.id}
          bounds={{ left: 0, top: 0 }}
          onDrag={handleDrag}
          {...dragHandlers}
        >
          <div ref={nodeRef} className="task_box">
            {item.Title}
          </div>
        </Draggable>
      ));

  useEffect(() => {
    console.log(deltaPosition, activeDrags);
  }, [deltaPosition, activeDrags]);
  return (
    <StyledModuleContainer width="90%">
      {stages.map((stage) => (
        <div className="module" key={stage}>
          <h2>{stage}</h2>
          {renderTasks(data, stage)}
        </div>
      ))}
    </StyledModuleContainer>
  );
}

export default ModuleContainer;
