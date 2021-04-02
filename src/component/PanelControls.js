import { usePanel } from '@lib/Paint'

export default function PanelControls({ merged }) {
  const { layers, activeLayerIndex, addLayer } = usePanel();

  const mergePaths = () => {
    console.log({merged, layers})    
    
    console.log('modify layers')
  };

  const exportLayers = () => {
    console.log(layers)
  };

  return (
    <div>
      <button onClick={mergePaths}>merge selected</button>
      <button onClick={exportLayers}>export all</button>
      <button onClick={addLayer}>add layer</button>
    </div>
  );
}
