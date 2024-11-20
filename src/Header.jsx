/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import "./index.css";

// Feature
import TopBar from "./features/TopBar";
import HeroContent from "./features/HeroContent";

// Styles


function Header() {
  return (
    <header>
      <TopBar/>
      <HeroContent/>
    </header>
  );
}

export default Header;