import { memo, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import s from 'S';
import { useToggle } from '@hooks';

const StyledPathItem = styled.div`
  input {
    margin-right: ${s.SPACING[4]}px;
  }
  ${s.rowCenter}
  ${s.mb1}

  span:hover {
    cursor: text;
  }
`;

const PathItem = memo(({ id, layerId, path, setMerged }) => {
  const checked = useToggle(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) return;

    setMerged((prev) => {
      let merged;

      const mergedInfo = prev.find(
        (mergedInfo) => mergedInfo.layerId === layerId
      );

      if (!mergedInfo) {
        return checked.on
          ? [
              ...prev,
              {
                layerId,
                paths: [id],
              },
            ]
          : prev;
      }

      mergedInfo.paths = checked.on
        ? [...mergedInfo.paths, id]
        : mergedInfo.paths.filter((pathId) => pathId !== id);

      merged = [...prev];

      return merged.filter((layer) => layer.paths.length);
    });
  }, [checked.on]);

  mountedRef.current = true;

  return (
    <StyledPathItem>
      <input
        id={path.id}
        type="checkbox"
        checked={checked.on}
        onChange={checked.toggle}
      />
      <div>{path.name}</div>
    </StyledPathItem>
  );
});

export default PathItem;
