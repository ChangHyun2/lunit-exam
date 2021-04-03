import styled from '@emotion/styled';
import { useCanvasContext, Path } from '@lib/Paint';
import s from 'S';

import Button from '@UI/Button';

const compareAngle = (point1, point2) => {
  const angle1 = point1.angle;
  const angle2 = point2.angle;

  return angle1 < angle2 ? -1 : 1;
};

const isPointInPolygon = (point, path) => {
  const { startPoint, points } = path;

  let count = 0;
  let position = compareAngle(startPoint, point);

  points.forEach((polygonPoint) => {
    const currentPosition = compareAngle(polygonPoint, point);

    if (position === currentPosition) {
      return;
    }

    position = currentPosition;

    if (polygonPoint.length < point.length) {
      count++;
    }
  });

  return count % 2 === 1;
};

const mergeTwoPath = (path1, path2) => {
  const mergedPoints = [];

  path1.points.forEach((point) => {
    if (isPointInPolygon(point, path1)) {
      console.log('in path1');
      return;
    }

    mergedPoints.push(point);
  });

  path2.points.forEach((point) => {
    if (isPointInPolygon(point, path2)) {
      console.log('in path2');
      return;
    }

    mergedPoints.push(point);
  });

  const mergedStart = mergedPoints[0];
  const mergedPath = new Path(mergedStart.x, mergedStart.y);
  mergedPoints.forEach((point) => mergedPath.addPoint(point.x, point.y));

  console.log(mergedPath);
  return mergedPath;
};

const StyledPanelControls = styled.div`
  button {
    ${s.fluid}
    ${s.mb1}
  }
`;

export default function PanelControls({ merged }) {
  const {
    state: { layers },
    helpers: { addLayer, setLayers },
  } = useCanvasContext();

  const mergePaths = () => {
    console.log({ merged, layers });

    const [path1Id, path2Id] = merged[0].paths;

    merged.forEach((mergedInfo) => {
      const layerIndex = layers.findIndex(
        (layer) => layer.id === mergedInfo.layerId
      );

      const layer = layers[layerIndex];

      const mergedPath = mergeTwoPath(...layer.paths);

      layer.paths = [mergedPath];

      setLayers([...layers]);
    });
  };

  const exportLayers = () => {
    const exportedLayers = {
      ...Object.values(layers).map(({ id, paths }) => ({
        id,
        paths: {
          ...Object.values(paths).map(({ id, points }) => ({
            id,
            points: { ...points },
          })),
        },
      })),
    };

    console.log(exportedLayers);

    return JSON.stringify(exportedLayers);
  };

  return (
    <StyledPanelControls>
      <Button
        onClick={mergePaths}
        disabled={
          merged.length === 0 ||
          (merged.length === 1 && merged[0].paths.length === 1)
        }
      >
        merge selected
      </Button>
      <Button onClick={addLayer}>add layer</Button>
      <Button onClick={exportLayers}>export all</Button>
    </StyledPanelControls>
  );
}
