/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Components
import StatBox from "../components/StatBox";

// Style Components
import Container from "../styled-components/Container";
import BtnGetStarted from "../styled-components/BtnGetStarted";

// Images
import screenMockups from "../assets/screen-mockups.svg";
import iconCommunities from "../assets/icon-communities.svg";
import iconMessages from "../assets/icon-messages.svg";

// Styles
const intro = css`
  text-align: center;
  padding: 0 clamp(1.6rem, 4.266666vw, 13.2rem);
`;

const mainHeading = css`
  font-size: clamp(2.4rem, 6.4vw, 4.8rem);
  line-height: clamp(3.6rem, 9.6vw, 7.2rem);
  font-weight: 600;
  margin-bottom: clamp(2.4rem, 6.4vw, 2.6rem);
`;

const introP = css`
  font-size: clamp(1.4rem, 3.733333vw, 2rem);
  line-height: clamp(2.1rem, 5.6vw, 3rem);
  margin-bottom: clamp(4.8rem, 12.8vw, 4.9rem);
  max-width: 600px;
  margin-inline: auto;
`;

const btnGetStarted = css`
  margin-bottom: clamp(10.4rem, 27.733333vw, 12rem);
`;

const heroImg = css`
  display: block;
  width: 100%;
  max-width: 1016px;
  margin-inline: auto;
  margin-bottom: 12rem;
`;

const statsWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(8.8rem, 23.466666vw, 34.1rem);
`;

function HeroContent(){
  return (
    <Container>
      {/* Intro */}
      <div css={intro}>
        <h1 css={mainHeading}>Build The Community Your Fans Will Love</h1>
        <p css={introP}>
          Huddle re-imagines the way we build communities. You have a voice,
          but so does your audience. Create connections with your users as 
          you engage in genuine discussion. 
        </p>
        <BtnGetStarted css={btnGetStarted}>Get Started For Free</BtnGetStarted>
      </div>

      {/* Hero Img */}
      <img css={heroImg} src={screenMockups} alt="A background illustration of desktop and mobile screens." />

      {/* Stats */}
      <div css={statsWrapper}>
        <StatBox
          img={iconCommunities}
          stat={"1.4k+"}
          text={"Communities Formed"}
          altText={"Icon illustration of a community."}
        />
        <StatBox
          img={iconMessages}
          stat={"2.7m+"}
          text={"Messages Sent"}
          altText={"Icon illustration of a message bubble."}
        />
      </div>
    </Container>
  )
}

export default HeroContent;