import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import Project from '@component/Project';

const StyledTab = styled.div`
  height: 100vh;
`;

export default function App() {
  return (
    <>
      <StyledTab>
        <Project />
      </StyledTab>
    </>
  );
}
