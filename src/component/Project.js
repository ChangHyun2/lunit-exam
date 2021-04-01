import React from 'react';
import styled from '@emotion/styled';
import Paint, { useProject } from '@lib/Paint';

import View from '@component/View';
import Controller from '@component/Controller';

const StyledProject = styled.div`
  > div {
    display: flex;
  }
`;

const LoadLayersButton = () => {
  const { setLayers } = useProject();

  const loadLayers = (e) => {
    // const loadedLayers = //
    // setLayers(loadedLayers);
  };

  return <button onClick={loadLayers}>레이어 불러오기</button>;
};

export default function Project(props) {
  return (
    <Paint initialState={undefined}>
      <StyledProject>
        <LoadLayersButton />
        <div>
          <View />
          <Controller />
        </div>
      </StyledProject>
    </Paint>
  );
}
