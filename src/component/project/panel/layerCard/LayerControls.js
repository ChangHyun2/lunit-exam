import styled from '@emotion/styled';
import s from 'S';

const StyledLayerControls = styled.div`
  ${s.mb1}
`;

const LayerControls = () => {
  return (
    <StyledLayerControls>
      {'layer controls hide, show, remove, add'}
    </StyledLayerControls>
  );
};

export default LayerControls;
