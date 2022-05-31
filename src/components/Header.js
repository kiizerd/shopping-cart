import styled, { css } from "styled-components";

const style = css`
  background-color: #2f2d2a;
  padding: 1rem;
  border-bottom: 1px solid black;

  h3 {
    margin: 0;
  }
`;

const Header = styled(({ children, ...rest }) => (
  <header {...rest}>
    <h3>Electronics and Accessories</h3>
    {children}
  </header>
))`
  ${style}
`;

export default Header;
