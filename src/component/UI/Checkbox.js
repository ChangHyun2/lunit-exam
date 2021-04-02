import React from 'react';
import styled from '@emotion/styled'

const StyledCheckbox = styled.input``;

const Checkbox = React.forwardRef(({ type, name, checked, onChange, ...otherProps }, ref) => {
    return (
      <StyledCheckbox
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        {...otherProps}
      />
    );
});
  
export default Checkbox