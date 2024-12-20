/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Styled Components
import SectionBg from "../styled-components/SectionBg";
import DividerImgMobileTop from "../styled-components/DividerImgMobileTop";
import DividerImgDesktopTop from "../styled-components/DividerImgDesktopTop";
import DividerImgMobileBottom from "../styled-components/DividerImgMobileBottom";
import DividerImgDesktopBottom from "../styled-components/DividerImgDesktopBottom";
import Container from "../styled-components/Container";
import SectionLayout from "../styled-components/SectionLayout";
import SectionImg from "../styled-components/SectionImg";
import SectionContent from "../styled-components/SectionContent";
import SectionHeading from "../styled-components/SectionHeading";
import SectionP from "../styled-components/SectionP";

// Images
import growTogetherImg from "../assets/illustration-grow-together.svg";
import bgSectionTopMobile1 from "../assets/bg-section-top-mobile-1.svg";
import bgSectionTopDesktop1 from "../assets/bg-section-top-desktop-1.svg";
import bgSectionBottomMobile1 from "../assets/bg-section-bottom-mobile-1.svg";
import bgSectionBottomDesktop1 from "../assets/bg-section-bottom-desktop-1.svg";

// Styles
const sectionImg = css`
  @media (min-width: 1340px) {
    order: 2;
  }
`;

function GrowTogether() {
  return (
    <section>
      <DividerImgMobileTop src={bgSectionTopMobile1} alt="A wave like image to divide sections."/>
      <DividerImgDesktopTop src={bgSectionTopDesktop1} alt="A wave like image to divide sections."/>
      <SectionBg>
        <Container>
          <SectionLayout>

            {/* Section Img */}
            <SectionImg css={sectionImg} src={growTogetherImg}/>

            {/* Section Content */}
            <SectionContent>
              <SectionHeading>Grow Together</SectionHeading>
              <SectionP>
                Generate meaningful discussions with your audience and build a strong,
                loyal community. Think of the insightful conversations you miss out on
                with a feedback form. 
              </SectionP>
            </SectionContent>

          </SectionLayout>
        </Container>
      </SectionBg>
      <DividerImgMobileBottom src={bgSectionBottomMobile1} alt="A wave like image to divide sections."/>
      <DividerImgDesktopBottom src={bgSectionBottomDesktop1} alt="A wave like image to divide sections."/>
    </section>
  );
}

export default GrowTogether;