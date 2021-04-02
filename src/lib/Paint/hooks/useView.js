import Project from '@component/Project';
import { useCanvasContext } from '../context/CanvasContext';

export default function useView() {
  const {
    initialState,
    state: { layers },
    helpers: { addPath, removePath },
  } = useCanvasContext();

  return {
    initialState,
    layers,
    addPath,
    removePath,
  };
}









