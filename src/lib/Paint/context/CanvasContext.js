import React from 'react';

const CanvasContext = React.createContext();
export const useCanvasContext = () => React.useContext(CanvasContext);

export default CanvasContext;
