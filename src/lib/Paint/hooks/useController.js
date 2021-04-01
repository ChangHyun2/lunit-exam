import { useCanvasContext } from '../context/CanvasContext';

export default function useController() {
  const {
    initialState,
    state: { layers },
    helpers: { addLayer, showLayer, hideLayer, removeLayer, focusLayer },
  } = useCanvasContext();

  return {
    initialState,
    layers,
    addLayer,
    showLayer,
    hideLayer,
    removeLayer,
    focusLayer,
  };
}
