import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useCanvasContext } from '@lib/Paint';
import s from 'S';

import PanelControls from './panel/PanelControls';
import LayerCard from './panel/LayerCard';

const StyledPanel = styled.div`
  padding: ${s.pad.xs};

  > ul {
    border: 1px solid red;
  }
`;

export default function Panel() {
  const {
    state: { layers },
    helpers: { addLayer, focusLayer, hideLayer, removeLayer, showLayer },
  } = useCanvasContext();

  const [merged, setMerged] = useState([]);

  useEffect(() => {
    console.log(merged);
  }, [merged]);

  useEffect(() => {
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
