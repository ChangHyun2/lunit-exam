import { forwardRef } from 'react';
import styled from '@emotion/styled';
import s from 'S';

console.log(s);

const StyledButton = styled.button`
  border: none;
  ${s.baseButton}
  background-color: ${s.pallete.secondary}
  padding: ${s.SPACING[8]}px ${s.SPACING[16]}px;
  color: ${s.pallete.white}

  :hover{
    background-color: ${s.pallete.secondaryDark}
  }

  :disabled{
    background-color: ${s.pallete.disabled}
    cursor: not-allowed;
  }
`;

export default forwardRef(function Button(props, ref) {
  const ds = [];

  return (
    <StyledButton {...props} ref={ref} css={ds.join('')}>
      {props.children}
    </StyledButton>
  );
});
