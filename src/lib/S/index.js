export * from './components';
export * from './stylesheet';

import * as alignChild from './stylesheet/alignChild';
import * as alignSelf from './stylesheet/alignSelf';
import * as baseComponent from './stylesheet/baseComponent';
import * as effect from './stylesheet/effect';
import * as mediaQuery from './stylesheet/mediaQuery';
import { default as pallete } from './stylesheet/pallete';
import { default as size } from './stylesheet/size';
import * as styling from './stylesheet/styling';
import * as typo from './stylesheet/typo';
import { default as zIndex } from './stylesheet/zIndex';
import * as values from './values';
import { default as round } from './stylesheet/round';
import { default as pad } from './stylesheet/pad';
import { default as spacing } from './stylesheet/spacing';

import * as AlignChildComponents from './components/alignChild';
import * as AlignSelfComponents from './components/alignSelf';
// import * as TextComponents from './components/text';

const S = {
  ...alignChild,
  ...alignSelf,
  ...baseComponent,
  ...mediaQuery,
  ...styling,
  ...typo,
  effect,
  ...values,
  size,
  pallete,
  zIndex,
  round,
  pad,
  spacing,

  ...AlignChildComponents,
  ...AlignSelfComponents,
};

export default S;
