// import React from 'react';
// import { css } from '@emotion/react';

// const style = ({ pd, size, color, center, bold }) =>
//   css`
//     ${pd ? `padding: ${pd};` : ''}
//     ${size ? `font-size: ${size}px;` : ''}
//     ${color ? `color: ${color};` : ''}
//     ${center ? `text-align: center;` : ''}
//     ${bold ? 'font-weight: bold;' : ''}
//   `;

// export const Text = ({
//   pd,
//   size,
//   color,
//   center,
//   bold,
//   span,
//   children,
//   ...props
// }) =>
//   span ? (
//     <span css={style({ pd, size, color, center, bold })} {...props}>
//       {children}
//     </span>
//   ) : (
//     <div css={style({ pd, size, color, center, bold })} {...props}>
//       {children}
//     </div>
//   );
