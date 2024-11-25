/**@jsxImportSource @emotion/react */
import "./index.css";

// Feature
import TopBar from "./features/TopBar";
import HeroContent from "./features/HeroContent";

function Header() {
  return (
    <header>
      <TopBar/>
      <HeroContent/>
    </header>
  );
}

export default Header;