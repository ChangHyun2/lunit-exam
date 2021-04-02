import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Project from '@component/Project';

// delete
import styled from '@emotion/styled';

// const StyledCanvas = styled.canvas`
//   width: 70%;
//   height: 70%;
//   border: 3px solid black;
// `;

// const View = styled.div`
//   width: 100%;
//   height: 100px;
// `;

// const Canvas = ({
//   viewRef,
//   options = {
//     lineCap: 'round',
//     strokeStyle: 'black',
//     lineWidth: 3,
//   },
// }) => {
//   const canvasRef = useRef();
//   const ctxRef = useRef();

//   const [size, setSize] = useState({
//     width: 0,
//     height: 0,
//   });
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [startPoint, setStartPoint] = useState(null);

//   const resize = () => {
//     const { width, height } = viewRef.current.getBoundingClientRect();

//     setSize({
//       width,
//       height,
//     });
//   };

//   const handleResize = () => {
//     resize();
//   };

//   useEffect(() => {
//     const ctx = canvasRef.current.getContext('2d');
//     ctxRef.current = ctx;

//     resize();
//     window.addEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const { width, height } = size;

//     canvas.width = width;
//     canvas.height = height;
//     canvas.style.width = `${width}px`;
//     canvas.style.height = `${height}px`;
//   }, [size]);

//   useEffect(() => {
//     const { lineCap, strokeStyle, lineWidth } = options;

//     const ctx = canvasRef.current.getContext('2d');

//     ctx.lineCap = lineCap;
//     ctx.strokeStyle = strokeStyle;
//     ctx.lineWidth = lineWidth;
//   }, [options]);

//   const handleMouseDown = ({ nativeEvent }) => {
//     const { offsetX, offsetY } = nativeEvent;
//     const ctx = ctxRef.current;

//     ctx.beginPath();
//     ctx.moveTo(offsetX, offsetY);

//     setIsDrawing(true);
//     setStartPoint({
//       x: offsetX,
//       y: offsetY,
//     });
//   };

//   const handleMouseMove = ({ nativeEvent }) => {
//     if (!isDrawing) {
//       return;
//     }

//     const { offsetX, offsetY } = nativeEvent;
//     const ctx = ctxRef.current;

//     console.log(ctx, offsetX, offsetY);

//     ctx.lineTo(offsetX, offsetY);
//     ctx.stroke();
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);

//     const ctx = ctxRef.current;
//     ctx.lineTo(startPoint.x, startPoint.y);
//     ctx.stroke();
//     ctx.closePath();
//   };

//   return (
//     <StyledCanvas
//       ref={canvasRef}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     />
//   );
// };

export default function App() {
  const viewRef = useRef();

  return (
    <>
      <Project />
      {/* <View ref={viewRef}>
         <Canvas viewRef={viewRef} />
         </View> */}
    </>
  );
}
