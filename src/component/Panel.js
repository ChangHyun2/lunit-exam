import React from 'react';
import styled from '@emotion/styled';
import { usePanel } from '@lib/Paint';

import PanelControls from '@component/PanelControls';
import LayerCard from '@component/LayerCard';

const StyledPanel = styled.div`
  > ul {
    border: 1px solid red;
  }
`;

export default function Panel() {
  const {
    layers,
    addLayer,
    focusLayer,
    hideLayer,
    removeLayer,
    showLayer,
  } = usePanel();

  const [merged, setMerged] = React.useState([]);

  React.useEffect(() => {
    console.log(merged);
  }, [merged]);

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
