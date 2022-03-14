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
