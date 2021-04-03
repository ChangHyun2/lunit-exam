import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import s from 'S';
import { useCanvasContext } from '@lib/Paint';
import PathItem from './layerCard/PathItem';
import LayerControls from './layerCard/LayerControls';

const StyledLayerCard = styled.div`
  ul {
    min-height: 100px;
    ${s.mb2}
    padding: ${s.SPACING[10]}px;

    box-shadow: 0 0 2px
      ${({ isActive }) => (isActive ? s.pallete.white : s.pallete.disabled)};
      
  }
`;

function LayerCard({ id, paths, isActive, setMerged }) {
  const {
    helpers: { focusLayer },
  } = useCanvasContext();

  const handleClick = () => focusLayer(id);

  return (
    <StyledLayerCard isActive={isActive} onClick={handleClick}>
      <LayerControls />
      <ul>
        {paths.map((path) => (
          <PathItem
            key={path.id}
            id={path.id}
            layerId={id}
            path={path}
            setMerged={setMerged}
          />
        ))}
      </ul>
    </StyledLayerCard>
  );
}

export default React.memo(LayerCard);
