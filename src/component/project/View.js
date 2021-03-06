import { useRef, useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { useCanvasContext, Path } from '@lib/Paint';
import s from 'S';

const StyledView = styled.div`
  width: 70%;
  height: 100%;

  canvas {
    background-color: ${s.pallete.primaryDark}
    width: 100%;
    height: 100%;
  }
`;

export default function View() {
  const viewRef = useRef();
  const canvasRef = useRef();
  const ctxRef = useRef();
  const drawingPath = useRef();

  const [isDrawing, setIsDrawing] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const {
    state: { layers },
    helpers: { addPath, removePath },
  } = useCanvasContext();

  const setBrush = useCallback((options = {}) => {
    const {
      lineCap = 'round',
      strokeWidth = '3px',
      strokeStyle = 'red',
    } = options;

    const ctx = ctxRef.current;

    ctx.lineCap = lineCap;
    ctx.strokeWidth = strokeWidth;
    ctx.strokeStyle = strokeStyle;
  }, []);

  const redraw = useCallback(() => {
    const { width, height } = viewRef.current.getBoundingClientRect();

    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, width, height);

    layers.forEach((layer) => {
      layer.isVisible &&
        layer.paths.forEach(({ startPoint, points }) => {
          ctx.beginPath();
          ctx.moveTo(startPoint.x, startPoint.y);

          // path에 optiopn 추가
          setBrush();

          points.forEach((point) => {
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
          });

          ctx.lineTo(startPoint.x, startPoint.y);
          ctx.stroke();
          ctx.closePath();
        });
    });
  }, [layers]);

  const handleResize = useCallback(() => {
    const { width, height, x, y } = viewRef.current.getBoundingClientRect();

    setSize({
      width: width - x,
      height: height - y,
    });
  }, []);

  const handleMouseDown = useCallback(
    ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      const ctx = ctxRef.current;

      ctx.beginPath();
      setBrush();
      ctx.moveTo(offsetX, offsetY);

      drawingPath.current = new Path(offsetX, offsetY);

      const activeLayer = layers.find((layer) => layer.isActive === true);
      drawingPath.current.setName(`polygon ${activeLayer.paths.length}`);

      setIsDrawing(true);
    },
    [layers, Path]
  );

  const handleMouseMove = useCallback(
    ({ nativeEvent: { offsetX, offsetY } }) => {
      if (!isDrawing) {
        return;
      }

      console.log(offsetX, offsetY);

      const ctx = ctxRef.current;

      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();

      drawingPath.current.addPoint(offsetX, offsetY);
    },
    [isDrawing]
  );

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false);

    const ctx = ctxRef.current;

    const { startPoint } = drawingPath.current;

    ctx.lineTo(startPoint.x, startPoint.y);
    ctx.stroke();
    ctx.closePath();

    addPath(drawingPath.current);
  }, [addPath]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctxRef.current = ctx;

    handleResize();
    window.addEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { width, height } = size;

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    redraw();
  }, [size, redraw]);

  useEffect(() => {
    redraw();
  }, [layers, redraw]);

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
