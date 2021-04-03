import styled from '@emotion/styled';
import Paint from '@lib/Paint';
import s from 'S';

import Panel from './project/Panel';
import View from './project/View';
import ProjectHeader from './project/ProjectHeader';

const StyledProject = styled.div`
  ${s.col}
  width: 100%;
  height: 100%;
  background-color: ${s.pallete.primary} > div {
    ${s.flex}
  }

  div:last-child {
    flex: 1;
  }
`;

export default function Project() {
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
