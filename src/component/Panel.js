import React from 'react';
import styled from '@emotion/styled';
import { useCanvasContext, usePanel } from '@lib/Paint';

import PanelControls from '@component/PanelControls';
import LayerCard from '@component/LayerCard';

const StyledPanel = styled.div`
  > ul {
    border: 1px solid red;
  }
`;

export default function Panel() {
  const {
    state: { layers },
    helpers: { addLayer, focusLayer, hideLayer, removeLayer, showLayer },
  } = useCanvasContext();

  const [merged, setMerged] = React.useState([]);

  React.useEffect(() => {
    console.log(merged);
  }, [merged]);

  React.useEffect(() => {
    // 초기화될 경우
    layers.length === 1 && layers[0].paths.length === 0 && setMerged([]);
  }, [layers]);

  return (
    <StyledPanel>
      {layers.map(({ id, paths, isActive }) => (
        <LayerCard
          key={id}
          id={id}
          paths={paths}
          merged={merged}
          setMerged={setMerged}
          isActive={isActive}
        />
      ))}
      <PanelControls merged={merged} />
    </StyledPanel>
  );
}
