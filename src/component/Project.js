import React from 'react';
import styled from '@emotion/styled';
import Paint, { useProject } from '@lib/Paint';

import View from '@component/View';
import Panel from '@component/Panel';

const StyledProject = styled.div`
  button {
  }

  > div {
    display: flex;
  }
`;

const LoadLayersButton = () => {
  const { setLayers } = useProject();

  // json import해서 layers 불러오기
  const loadLayers = (e) => {
    // const loadedLayers = //
    // setLayers(loadedLayers);
  };

  return <button onClick={loadLayers}>레이어 불러오기</button>;
};

const InitializeButton = () => {
  const { initialize } = useProject();

  return <button onClick={initialize}>초기화하기</button>;
};

export default function Project(props) {
  return (
    <Paint initialState={undefined}>
      <StyledProject>
        <LoadLayersButton />
        <InitializeButton />
        <div>
          <View />
          <Panel />
        </div>
      </StyledProject>
    </Paint>
  );
}
