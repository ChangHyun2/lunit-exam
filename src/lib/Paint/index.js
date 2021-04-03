import React from 'react';
import Layer from './constructors/Layer';
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

      const oldActiveLayer = state.layers[state.activeLayerIndex];
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

function Paint(props) {
  // state
  const [state, dispatch] = React.useReducer(
    canvasStateReducer,
    getDefaultInitialState()
  );

  // helpers
  let helpers = {};

  // used in Project
  const initialize = React.useCallback(() => {
    dispatch({
      type: 'INITIALIZE',
      payload: getDefaultInitialState(),
    });
  });

  const setLayers = React.useCallback((layers) => {
    dispatch({
      type: 'SET_LAYERS',
      payload: layers,
    });
  }, []);

  // used in Controller
  const addLayer = React.useCallback(() => {
    dispatch({
      type: 'ADD_LAYER',
      payload: new Layer({
        paths: [],
        isActive: true,
      }),
    });
  }, []);

  const removeLayer = React.useCallback((id) => {
    dispatch({
      type: 'REMOVE_LAYER',
      payload: id,
    });
  }, []);

  const focusLayer = React.useCallback((layerId) => {
    dispatch({
      type: 'FOCUS_LAYER',
      payload: layerId,
    });
  }, []);

  const showLayer = React.useCallback((layerId) => {
    dispatch({
      type: 'SHOW_LAYER',
      payload: layerId,
    });
  }, []);

  const hideLayer = React.useCallback((layerId) => {
    dispatch({
      type: 'HIDE_LAYER',
      payload: layerId,
    });
  }, []);

  // used in View
  const addPath = React.useCallback((path) => {
    dispatch({
      type: 'ADD_PATH',
      payload: path,
    });
  }, []);

  const removePath = React.useCallback((id) => {
    dispatch({
      type: 'REMOVE_PATH',
      payload: id,
    });
  }, []);

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

export { default as Layer } from './constructors/Layer';
export { default as Path } from './constructors/Path';
export { default as Point } from './constructors/Point';
export { default as usePanel } from './hooks/usePanel';
export { default as useProject } from './hooks/useProject';
export { default as useView } from './hooks/useView';
export { useCanvasContext } from './context/CanvasContext';

export default Paint;
