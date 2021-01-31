import { forwardRef } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
`;
const Button2 = styled(Button)`
  background-color: red;
  color: ${props => props.disabled ? '#777' : '#fff'};
`;

export default forwardRef(function Button(props, ref) {
  const ds = [];

  if (props.disabled) {
    ds.push('background-color: grey;');
  }

  return (
    <Button2 ref={ref} css={ds.join('')}>
      {props.children}
    </Button2>
  );
});
