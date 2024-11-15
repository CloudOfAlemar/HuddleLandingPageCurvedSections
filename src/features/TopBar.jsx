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
`;

const huddleLogo = css`
  width: clamp(7.2rem, 25.6vw, 24rem);
`;

const btnTryIt = css`
  font-size: clamp(.702613rem, 2.509333vw, 1.6rem);
  line-height: 1.381509em;
  padding: 0.531349em 1.8em;
  border: clamp(.05rem, 0.157333vw, .1rem) solid var(--pink);
  border-radius: 2em;
  background-color: transparent;
  color: var(--pink);
  box-shadow: 0 0 clamp(.5rem, 1.333333vw, .9rem) rgba(225, 82, 193, 21.88%);
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