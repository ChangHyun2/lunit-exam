import styled from '@emotion/styled';
import {
  flex,
  row,
  rowCenter,
  rowSpaceBetween,
  rowEnd,
  col,
  colCenter,
  colSpaceBetween,
  relative,
  absolute,
} from '../stylesheet/alignChild';

export const Flex = styled.div`
  ${flex}
`;

export const Row = styled.div`
  ${row}
`;
export const RowCenter = styled.div`
  ${rowCenter}
`;
export const RowEnd = styled.div`
  ${rowEnd}
`;

export const RowSpaceBetween = styled.div`
  ${rowSpaceBetween}
`;

export const Col = styled.div`
  ${col}
`;

export const ColCenter = styled.div`
  ${colCenter}
`;

export const ColSpaceBetween = styled.div`
  ${colSpaceBetween}
`;

export const Relative = styled.div`
  ${relative}
`;
