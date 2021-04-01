import React from 'react';
import styled from '@emotion/styled';

const StyledView = styled.div`
  width: 70%;
`;

export default function View(props) {
  const viewRef = React.useRef();
  const canvasRef = React.useRef();

  const resize = () => {};

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = canvas.style.width = '100%';
    canvas.style.height = '100%';
  }, []);

  return (
    <StyledView>
      <canvas ref={canvasRef}></canvas>;
    </StyledView>
  );
}
