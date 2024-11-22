/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Style Components
import Container from "../styled-components/Container";

// Images
import logo from "../assets/logo.svg";

// Styles
const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(11.2rem, 29.866666vw, 22.5rem);
  padding-top: clamp(2.4rem, 6.4vw, 8rem);
`;

const huddleLogo = css`
  width: clamp(9.6rem, 25.6vw, 24rem);
`;

const btnTryIt = css`
  font-size: clamp(.941rem, 2.509333vw, 1.6rem);
  line-height: clamp(1.3rem, 3.466666vw, 2.2rem);
  padding: clamp(.55rem, 1.466666vw, .9rem) clamp(1.8rem, 4.8vw, 3.05rem);
  border: clamp(.05rem, 0.157333vw, .1rem) solid var(--dark-pink);
  border-radius: clamp(1.176rem, 3.136vw, 2rem);
  background-color: transparent;
  color: var(--dark-pink);
  box-shadow: 0 0 clamp(.5rem, 1.333333vw, .9rem) rgba(225, 82, 193, 21.88%);
  transition: all 350ms;
  &:hover {
    color: var(--pink);
    border-color: var(--pink);
    cursor: pointer;
  }
`;

function TopBar() {
  return (
    <Container css={container}>
      <img css={huddleLogo} src={logo} alt="The Huddle logo." />
      <button css={btnTryIt}>Try It Free</button>
    </Container>
  );
}

export default TopBar;