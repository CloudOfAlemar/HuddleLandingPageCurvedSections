/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Styled Components
import BtnGetStarted from "../styled-components/BtnGetStarted";
import Container from "../styled-components/Container";

// Styles
const closingContent = css`
  text-align: center;
`;

const sectionClosing = css`
  padding: clamp(5rem, 13.333333vw, 10rem) 0 clamp(15rem, 40vw, 20rem);
`;

const closingHeading = css`
  font-size: clamp(2.4rem, 6.4vw, 4rem);
  line-height: clamp(3.6rem, 9.6vw, 6rem);
  margin-bottom: clamp(4rem, 10.666666vw, 4.2rem);
  font-weight: 600;
`;

function Closing() {
  return (
    <section css={sectionClosing}>
      <Container>
        <div css={closingContent}>
          <h2 css={closingHeading}>Ready To Build Your Community?</h2>
          <BtnGetStarted>Get Started For Free</BtnGetStarted>
        </div>
      </Container>
    </section>
  );
}

export default Closing;