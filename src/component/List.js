import { useLayerContext } from 'lib/Paint/context/CanvasContext';
import styled from '@emotion/styled';

const StyledList = styled.div`
  width: 30%;
`;

export default function List() {
  const {
    state: { paths },
  } = useLayerContext();

  return (
    <StyledList>
      <ul>
        {paths.map((path) => {
          return (
            <li key={path.id}>
              <input type="checkbox" />
              {`${path.name}`}
            </li>
          );
        })}
      </ul>
    </StyledList>
  );
}
