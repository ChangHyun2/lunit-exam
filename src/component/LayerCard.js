import styled from "@emotion/styled";
import PathItem from './PathItem'
import {usePanel} from '@lib/Paint'
import React, { useEffect } from "react";

const StyledLayerCard = styled.div`
  ul {
    border: 1px solid ${({isActive}) => isActive ? 'blue' : 'black'};
    min-height: 100px;
    
  }
`;

function LayerCard({ id, paths, isActive, setMerged }) {
  const { focusLayer } = usePanel()

  const handleClick = () => focusLayer(id)

  return (
    <StyledLayerCard isActive={isActive} onClick={handleClick}>
      {"LayerControls (hide, show, remove, add)"}
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

export default React.memo(LayerCard)