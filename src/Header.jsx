/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import "./index.css";

// Feature
import TopBar from "./features/TopBar";

// Styles
const header = css`
  padding: var(--edge-padding);
`;

function Header() {
  return (
    <header css={header}>
      <TopBar/>
    </header>
  );
}

export default Header;