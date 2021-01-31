export const toCamelCase = (str) =>
  str
    .split('-')
    .map((subStr, i) =>
      i === 0 ? subStr : subStr[0].toUpperCase() + subStr.slice(1)
    )
    .join('');
