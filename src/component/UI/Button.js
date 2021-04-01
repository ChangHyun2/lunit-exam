import { forwardRef } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  border: none;
`;

export default forwardRef(function Button(props, ref) {
  const ds = [];
  
  return (
    <StyledButton ref={ref} css={ds.join('')}>
      {props.children}
    </StyledButton>
  );
});
