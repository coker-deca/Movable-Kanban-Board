/* eslint-disable react/no-array-index-key */
import React, { PropsWithChildren, ReactElement } from 'react';

import stages from '../../../constants/kanbanStages';
import { Task } from '../../../constants/types';
import StyledModuleContainer from './Style';

function ModuleContainer({
  data,
}: PropsWithChildren<{ data: Task[] }>): ReactElement {
  const renderTasks = (task: Task[], stage: string) =>
    task
      .filter((item) => item.Status === stage)
      .map((item) => <p key={item.id}>{item.Title}</p>);
  return (
    <StyledModuleContainer width="90%">
      {stages.map((stage, idx) => (
        <div className="module" key={idx}>
          <h2 key={idx}>{stage}</h2>
          {renderTasks(data, stage)}
        </div>
      ))}
    </StyledModuleContainer>
  );
}

export default ModuleContainer;
