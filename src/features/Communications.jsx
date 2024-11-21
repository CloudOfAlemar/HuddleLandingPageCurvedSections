/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Styled Components
import DividerImgMobileTop from "../styled-components/DividerImgMobileTop";
import DividerImgDesktopTop from "../styled-components/DividerImgDesktopTop";

// Images
import bgFooterTopMobile from "../assets/bg-footer-top-mobile.svg";
import bgFooterTopDesktop from "../assets/bg-footer-top-desktop.svg";

function Communications(){
  return (
    <>
      <DividerImgMobileTop src={bgFooterTopMobile} alt="A wave like image to divide sections."/>
      <DividerImgDesktopTop src={bgFooterTopDesktop} alt="A wave like image to divide sections."/>
    </>
  );
}

export default Communications;