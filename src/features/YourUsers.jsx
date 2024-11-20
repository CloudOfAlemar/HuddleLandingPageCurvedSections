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
import yourUsersImg from "../assets/illustration-your-users.svg";
import bgSectionTopMobile2 from "../assets/bg-section-top-mobile-2.svg";
import bgSectionTopDesktop2 from "../assets/bg-section-top-desktop-2.svg";
import bgSectionBottomMobile2 from "../assets/bg-section-bottom-mobile-2.svg";
import bgSectionBottomDesktop2 from "../assets/bg-section-bottom-desktop-2.svg";

// Styles
const sectionImg = css`
  @media (min-width: 1340px) {
    order: 2;
  }
`;

function YourUsers() {
  return (
    <section>
      <DividerImgMobileTop src={bgSectionTopMobile2} alt="A wave like image to divide sections."/>
      <DividerImgDesktopTop src={bgSectionTopDesktop2} alt="A wave like image to divide sections."/>
      <SectionBg>
        <Container>
          <SectionLayout>

            {/* Section Img */}
            <SectionImg css={sectionImg} src={yourUsersImg}/>

            {/* Section Content */}
            <SectionContent>
              <SectionHeading>Your Users</SectionHeading>
              <SectionP>
              It takes no time at all to integrate Huddle with your app's authentication solution. 
              This means, once signed in to your app, your users can start chatting immediately. 
              </SectionP>
            </SectionContent>

          </SectionLayout>
        </Container>
      </SectionBg>
      <DividerImgMobileBottom src={bgSectionBottomMobile2} alt="A wave like image to divide sections."/>
      <DividerImgDesktopBottom src={bgSectionBottomDesktop2} alt="A wave like image to divide sections."/>
    </section>
  );
}

export default YourUsers;