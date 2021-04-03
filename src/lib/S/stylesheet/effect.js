export const outline = `
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 13px);
    height: 58px;
    border: 1px solid transparent;
    border-radius: 13px;
    transition: border-color 0.7s;
  }
  &:focus::before {
    border-color: #555;
  }
`;
