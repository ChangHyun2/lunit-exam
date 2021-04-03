import { createContext, useContext } from 'react';

const CanvasContext = createContext();
export const useCanvasContext = () => useContext(CanvasContext);

export default CanvasContext;
