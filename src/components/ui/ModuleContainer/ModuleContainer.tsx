/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react';

import stages from '../../../constants/kanbanStages';
import { Task } from '../../../constants/types';
import Card from '../Card/Card';
import StyledModuleContainer from './Style';

function ModuleContainer({
  data,
  openTask,
}: PropsWithChildren<{
  openTask: (task: Task) => void;
  data: Task[];
}>): ReactElement {
  const nodeRef = useRef(null);
  // const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  // const onStart = () => {
  //   setActiveDrags((prev) => ++prev);
  // };

  // const onStop = () => {
  //   setActiveDrags((prev) => --prev);
  // };
  // const dragHandlers = { onStart, onStop };
  const handleDrag = (e: any, ui: { deltaX: number; deltaY: number }) => {
    setDeltaPosition((prev) => ({
      x: prev.x + ui.deltaX,
      y: prev.y + ui.deltaY,
    }));
  };
  const renderTasks = (task: Task[], stage: string) =>
    task
      .filter((item) => item.Status === stage)
      .map((item) => (
        <Card
          handleDrag={handleDrag}
          task={item}
          ref={nodeRef}
          openTask={openTask}
        />
      ));

  useEffect(() => {}, [deltaPosition]);

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
