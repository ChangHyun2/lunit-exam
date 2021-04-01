import { useCanvasContext } from '../context/CanvasContext';

export default function useProject() {
  const {
    helpers: { setLayers },
  } = useCanvasContext();

  return {
    setLayers,
  };
}
