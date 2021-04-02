import React from "react";
import { useToggle } from "@hooks";
import Checkbox from "@component/UI/Checkbox";
import { Path } from "@lib/Paint";

const PathItem = React.memo(({ id, layerId, path, setMerged }) => {
  const checked = useToggle(false);

  React.useEffect(() => {
    setMerged((prev) => {
      let merged;

      const mergedLayer = prev.find(
        (mergedLayer) => mergedLayer.id === layerId
      );

      if (!mergedLayer) {
        return checked.on
          ? [
              ...prev,
              {
                id: layerId,
                paths: [id],
              },
            ]
          : prev;
      }

      mergedLayer.paths = checked.on
        ? [...mergedLayer.paths, id]
        : mergedLayer.paths.filter((pathId) => pathId === id);

      merged = [...prev];

      return merged;
    });
  }, [checked.on]);

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
