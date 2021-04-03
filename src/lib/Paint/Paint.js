import { useCallback, useReducer } from 'react';
import Layer from './elements/Layer';
import CanvasContext from './context/CanvasContext';

// state reducer

function canvasStateReducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE': {
      return { ...action.payload };
    }

    case 'SET_LAYERS': {
      const layers = action.payload;

      let activeLayerIndex = layers.findIndex(
        (layer) => layer.isActive === true
      );

      if (activeLayerIndex === -1) {
        layers[0].isActive = true;
      }

      return {
        ...state,
        layers,
      };
    }

    case 'ADD_LAYER': {
      const layer = action.payload;

      const oldActiveLayer = state.layers.find(
        (layer) => layer.isActive === true
      );
      oldActiveLayer.isActive = false;

      return {
        ...state,
        layers: [...state.layers, layer],
      };
    }

    case 'ADD_PATH': {
      const activeLayer = state.layers.find((layer) => layer.isActive === true);

      const path = action.payload;
      activeLayer.add(path);

      return {
        ...state,
        layers: [...state.layers],
      };
    }

    case 'FOCUS_LAYER': {
      const oldActiveLayer = state.layers.find((layer) => layer.isActive);
      oldActiveLayer.isActive = false;

      const focusedLayerId = action.payload;
      const focusedLayer = state.layers.find(
        (layer) => layer.id === focusedLayerId
      );
      focusedLayer.isActive = true;

      return {
        ...state,
        layers: [...state.layers],
      };
    }

    // case 'SHOW_LAYER':
    // case 'HIDE LAYER':

    case 'REMOVE_LAYER': {
      const removedLayerId = action.payload;

      const removedLayerIndex = state.layers.findIndex(
        (layer) => layer.id === removedLayerId
      );

      // layer time traveling에서 사용
      const removedLayer = state.layers.splice(removedLayerIndex, 1)[0];

      return {
        ...state,
        layers: [...state.layers],
      };
    }

    case 'REMOVE_PATH': {
      const removedPathId = action.payload;

      const activeLayer = state.layers.find((layer) => layer.isActive === true);

      const removedPathIndex = activeLayer.paths.findIndex(
        (path) => path.id === removedPathId
      );

      // path time traveling에서 사용
      const removedPath = activeLayer.splice(removedPathIndex, 1)[0];

      return {
        ...state,
        layers: [...state.layers],
      };
    }
  }
}

const getDefaultInitialState = () => ({
  layers: [
    new Layer({
      paths: [],
      isActive: true,
    }),
  ],
  activeLayerIndex: 0,
});

export default function Paint(props) {
  // state
  const [state, dispatch] = useReducer(
    canvasStateReducer,
    getDefaultInitialState()
  );

  // helpers
  let helpers = {};

  const initialize = useCallback(() => {
    dispatch({
      type: 'INITIALIZE',
      payload: getDefaultInitialState(),
    });
  }, [dispatch]);

  const setLayers = useCallback(
    (layers) => {
      dispatch({
        type: 'SET_LAYERS',
        payload: layers,
      });
    },
    [dispatch]
  );

  const addLayer = useCallback(() => {
    dispatch({
      type: 'ADD_LAYER',
      payload: new Layer({
        paths: [],
        isActive: true,
      }),
    });
  }, [dispatch]);

  const removeLayer = useCallback(
    (id) => {
      dispatch({
        type: 'REMOVE_LAYER',
        payload: id,
      });
    },
    [dispatch]
  );

  const focusLayer = useCallback(
    (layerId) => {
      dispatch({
        type: 'FOCUS_LAYER',
        payload: layerId,
      });
    },
    [dispatch]
  );

  const showLayer = useCallback(
    (layerId) => {
      dispatch({
        type: 'SHOW_LAYER',
        payload: layerId,
      });
    },
    [dispatch]
  );

  const hideLayer = useCallback(
    (layerId) => {
      dispatch({
        type: 'HIDE_LAYER',
        payload: layerId,
      });
    },
    [dispatch]
  );

  const addPath = useCallback(
    (path) => {
      dispatch({
        type: 'ADD_PATH',
        payload: path,
      });
    },
    [dispatch]
  );

  const removePath = useCallback(
    (id) => {
      dispatch({
        type: 'REMOVE_PATH',
        payload: id,
      });
    },
    [dispatch]
  );

  helpers = {
    setLayers,
    addLayer,
    showLayer,
    hideLayer,
    removeLayer,
    focusLayer,
    addPath,
    removePath,
    initialize,
  };

  // initialState/state/helpers in canvas context value
  return (
    <CanvasContext.Provider
      value={{
        state,
        helpers,
      }}
    >
      {props.children}
    </CanvasContext.Provider>
  );
}
