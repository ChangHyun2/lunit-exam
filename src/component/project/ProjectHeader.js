import Button from '@UI/Button';
import styled from '@emotion/styled';
import { useCanvasContext } from '@lib/Paint';
import s from 'S';

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
      <Button onClick={loadLayers}>레이어 불러오기</Button>
      <Button onClick={initialize}>초기화하기</Button>
    </StyledProjectHeader>
  );
};

export default ProjectHeader;
