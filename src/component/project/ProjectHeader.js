import styled from '@emotion/styled';
import { useCanvasContext } from '@lib/Paint';
import s from 'S';

import Button from '@UI/Button';

const StyledProjectHeader = styled.div`
  padding: ${s.SPACING[10]}px;
  button {
    margin-right: ${s.SPACING[8]}px;
  }
`;

const ProjectHeader = () => {
  const {
    helpers: { setLayers, initialize },
  } = useCanvasContext();

  // json import해서 layers 불러오기
  const loadLayers = (e) => {
    // const loadedLayers = //
    // setLayers(loadedLayers);
  };

  return (
    <StyledProjectHeader>
      <Button onClick={loadLayers}>load layers</Button>
      <Button onClick={initialize}>reset</Button>
    </StyledProjectHeader>
  );
};

export default ProjectHeader;
