import { useState, useCallback } from 'react';

const useToggle = (initialState = 'false') => {
  const [onState, setOnState] = useState(initialState);

  const setOn = useCallback(() => setOnState(true));
  const setOff = useCallback(() => setOnState(false));
  const toggle = useCallback(() => setOnState((prev) => !prev));

  return {
    on: onState,
    setOn,
    setOff,
    toggle,
  };
};

export default useToggle;
