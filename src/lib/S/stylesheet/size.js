// const unit = ['em', 'rem', 'px', '%', 'vw', 'vh'];

const size = (width, height) => {
  if (height === undefined) {
    return `width:${width}; height:${height};`;
  }

  //   if ([width, height].some((a) => unit.every((u) => u !== a))) {
  //     throw new Error('must assign em rem px % vw vh unit to width and height in size method');
  //   }

  return `width:${width}; height:${height};`;
};

export default size;
