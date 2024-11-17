/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Style Components
import Container from "../styled-components/Container";
import BtnGetStarted from "../styled-components/BtnGetStarted";

// Styles
const intro = css`
  text-align: center;
  padding: 0 4.266666vw;
`;

const mainHeading = css`
  font-size: clamp(2.4rem, 6.4vw, 4.8rem);
  font-weight: 600;
  line-height: 1.5em;
  margin-bottom: clamp(2.4rem, 6.4vw, 2.6rem);
`;

const introP = css`
  font-size: clamp(1.4rem, 3.733333vw, 2rem);
  line-height: 1.5em;
  margin-bottom: clamp(4.8rem, 12.8vw, 4.9rem);
`;

const btnGetStarted = css`
  margin-bottom: clamp(10.4rem, 27.733333vw, 12rem);
`;

function HeroContent(){
  return (
    <Container>
      <div css={intro}>
        <h1 css={mainHeading}>Build The Community Your Fans Will Love</h1>
        <p css={introP}>
          Huddle re-imagines the way we build communities. You have a voice,
          but so does your audience. Create connections with your users as 
          you engage in genuine discussion. 
        </p>
        <BtnGetStarted css={btnGetStarted}>Get Started For Free</BtnGetStarted>
      </div>

      <img src="" alt="" />
    </Container>
  )
}

export default HeroContent;