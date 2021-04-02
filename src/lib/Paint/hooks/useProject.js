import { useCanvasContext } from '../context/CanvasContext';

export default function useProject() {
  const {
    helpers: { setLayers, initialize },
  } = useCanvasContext();

  return {
    setLayers,
    initialize,
  };
}
