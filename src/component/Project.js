import React from 'react';
import styled from '@emotion/styled';
import Paint from '@lib/Paint';
import s from 'S';

import Panel from './project/Panel';
import View from './project/View';
import ProjectHeader from './project/ProjectHeader';

const StyledProject = styled.div`
  height: 100vh;
  ${s.col}
  background-color: ${s.pallete.primary}

  > div {
    ${s.flex}
  }

  div:last-child {
    flex: 1;
  }
`;

export default function Project(props) {
  return (
    <Paint initialState={undefined}>
      <StyledProject>
        <ProjectHeader />
        <div>
          <View />
          <Panel />
        </div>
      </StyledProject>
    </Paint>
  );
}
