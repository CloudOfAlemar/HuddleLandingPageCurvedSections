/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import "./index.css";

// Feature
import TopBar from "./features/TopBar";
import HeroContent from "./features/HeroContent";

// Styles
const header = css`
  padding: clamp(2.4rem, 6.4vw, 7.8rem) var(--edge-padding) clamp(13rem, 34.666666vw, 40rem);
`;

function Header() {
  return (
    <header css={header}>
      <TopBar/>
      <HeroContent/>
    </header>
  );
}

export default Header;