import React from 'react';
import styled from '@emotion/styled';
import { useView, Path } from '@lib/Paint';

const StyledView = styled.div`
  width: 70%;
  height: 100%;
`;

export default function View(props) {
  const viewRef = React.useRef();
  const canvasRef = React.useRef();
  const ctxRef = React.useRef();
  const drawingPath = React.useRef();

  const [isDrawing, setIsDrawing] = React.useState(false);
  const [size, setSize] = React.useState({
    width: 0,
    height: 0,
  });

  const { addPath, removePath, layers } = useView();

  const handleResize = React.useCallback(() => {
    const { width, height, x, y } = viewRef.current.getBoundingClientRect();

    setSize({
      width : width -x,
      height : height -y,
    });
  });

  const handleMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const ctx = ctxRef.current;

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);

    drawingPath.current = new Path(offsetX, offsetY);

    const activeLayer = layers.find((layer) => layer.isActive === true);
    drawingPath.current.setName(`polygon ${activeLayer.paths.length}`);

    setIsDrawing(true);
  };

  const handleMouseMove = ({ nativeEvent: { offsetX, offsetY } }) => {
    if (!isDrawing) {
      return;
    }

    const ctx = ctxRef.current;

    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    drawingPath.current.addPoint(offsetX, offsetY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);

    const ctx = ctxRef.current;

    const { startPoint } = drawingPath.current;

    ctx.lineTo(startPoint.x, startPoint.y);
    ctx.stroke();
    ctx.closePath();

    addPath(drawingPath.current);
  };

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctxRef.current = ctx;

    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const { width, height } = size;

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }, [size]);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const {
      lineCap = 'round',
      strokeStyle = 'black',
      lineWidth = '3px',
    } = props;

    ctx.lineCap = lineCap;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
  }, [props.lineCap, props.strokeStyle, props.lineWidth]);

  return (
    <StyledView ref={viewRef}>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
    </StyledView>
  );
}
