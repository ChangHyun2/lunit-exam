import React from 'react';
import { useToggle } from '@hooks';
import Checkbox from '@component/UI/Checkbox';
import { Path } from '@lib/Paint';

const PathItem = React.memo(({ id, layerId, path, setMerged }) => {
  const checked = useToggle(false);
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
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

      return merged;
    });
  }, [checked.on]);

  mountedRef.current = true;

  return (
    <li>
      <Checkbox
        id={path.id}
        type="checkbox"
        checked={checked.on}
        onChange={checked.toggle}
      />
      <div>{path.name}</div>
    </li>
  );
});

export default PathItem;
