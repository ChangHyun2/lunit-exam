import { useCanvasContext } from '@lib/Paint';

const isPointInPolygon = (point, polygon) => {};

const mergeTwoPath = (path1, path2) => {
  const points1 = path1.points;
  const points2 = path2.points;

  // pasth1의 x 범위 내에 포함되는 점들만 모아서

  const p1X = points1.map((p) => p.x);

  const maxP1 = Math.max(...p1X);
  const minP1 = Math.min(...p1X);

  points2.map((p2) => {
    const { x, y } = p2;

    if (x >= maxP1 || x <= minP1) {
      return;
    }

    // y가

    console.log(x, y);
  });
  console.log(minP1, maxP1);
  console.log(points1, points2);
};

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

      // setLayers();
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
    <div>
      <button onClick={mergePaths} disabled={merged.length === 0}>
        merge selected
      </button>
      <button onClick={addLayer}>add layer</button>
      <button onClick={exportLayers}>export all</button>
    </div>
  );
}
