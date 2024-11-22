/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Styled Components
import Container from "../styled-components/Container";
import DividerImgMobileTop from "../styled-components/DividerImgMobileTop";
import DividerImgDesktopTop from "../styled-components/DividerImgDesktopTop";

// Images
import logo from "../assets/logo-white.svg";
import bgFooterTopMobile from "../assets/bg-footer-top-mobile.svg";
import bgFooterTopDesktop from "../assets/bg-footer-top-desktop.svg";
import iconPhone from "../assets/icon-phone.svg";
import iconEmail from "../assets/icon-email.svg";

// Styles
const container = css`
  color: #FFFFFF;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10.4rem;
  @media (min-width: 1106px) {
    justify-content: space-between; 
    align-items: flex-start;
  }
`;

const sectionBgFooter = css`
  background-color: var(--navy-blue);
  padding-top: clamp(4rem, 10.666666vw, 10rem);
  padding-bottom: clamp(4rem, 10.666666vw, 10rem);
`;

const newsletterArea = css`
  width: clamp(32rem, 85.333333vw, 52rem);
  @media (min-width: 1106px) {
    order: 2;  
  }
`;

const newsletterHeading = css`
  font-size: clamp(2rem, 5.333333vw, 2.4rem);
  line-height: clamp(3rem, 8vw, 3.6rem);
  font-weight: bold;
  margin-bottom: 1.6rem;
`;

const footerP = css`
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 600;
`;

const newsletterP = css`
  margin-bottom: clamp(3.2rem, 8.533333vw, 4rem);
  max-width: 34.4rem;
`;

const newsletterForm = css`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.6rem, 4.266666vw, 3.2rem);
`;

const newsletterInput = css`
  width: 100%;
  border: none;
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: .8rem;
  border-radius: .6rem;
  @media (min-width: 590px) {
    max-width: 32rem;
  }
`;

const btnNewsletter = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  padding: 1.2rem 4.1rem;
  background-color: var(--dark-pink);
  color: #FFFFFF;
  border: none;
  border-radius: .5rem;
  margin-left: auto;
  transition: background-color 350ms;
  &:hover {
    background-color: var(--pink);
    cursor: pointer;
  }
`;

const contactArea = css`
  max-width: 34rem;
`;

const logoFooter = css`
  width: clamp(20rem, 53.333333vw, 24rem);
  margin-bottom: clamp(1.6rem, 4.266666vw, 2.7rem);
`;

const contactP = css`
  margin-bottom: 4rem;
`;

const contactInfoArea = css`
  margin-bottom: clamp(4.8rem, 12.8vw, 8rem);
`;

const contactInfoWrapper = css`
  display: flex;
  align-items: center;
`;

const contactInfoWrapper1 = css`
  margin-bottom: 1.6rem;
`;

const contactIcons = css`
  width: 2.4rem;
  margin-right: 1.6rem;
`;

const contactInfo = css`
  font-size: clamp(1.4rem, 3.733333vw, 1.6rem);
`;

const socialIcon = css`
  font-size: clamp(2.3rem, 6.133333vw, 3.2rem);
  margin-right: 1.6rem;
  transition: 350ms;
  &:hover {
    color: var(--bright-blue);
    cursor: pointer;
  }
`;

function Communications(){
  return (
    <>
      <DividerImgMobileTop src={bgFooterTopMobile} alt="A wave like image to divide sections."/>
      <DividerImgDesktopTop src={bgFooterTopDesktop} alt="A wave like image to divide sections."/>
      <div css={sectionBgFooter}>
        <Container css={container}>

          {/* Newsletter */}
          <div css={newsletterArea}>
            <h3 css={newsletterHeading}>Newsletter</h3>
            <p css={[footerP, newsletterP]}>
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your
              email address
            </p>
            <form css={newsletterForm} action="">
              <input css={newsletterInput} type="email" />
              <button css={btnNewsletter}>Subscribe</button>
            </form>
          </div>

          {/* Contact */}
          <div css={contactArea}>
            <img css={logoFooter} src={logo} alt="The Huddle logo in white." />

            <p css={[footerP, contactP]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris nulla quam, hendrerit lacinia vestibulum a,
              ultrices quis sem.
            </p>

            <div css={contactInfoArea}>
              <div css={[contactInfoWrapper, contactInfoWrapper1]}>
                <img css={contactIcons} src={iconPhone} alt="Phone Icon." />
                <span css={contactInfo}>Phone: +1-543-123-4567</span>
              </div>
              <div css={contactInfoWrapper}>
                <img css={contactIcons} src={iconEmail} alt="Email Icon." />
                <span css={contactInfo}>example@company.com</span>
              </div>
            </div>

            <div>
              <i css={socialIcon} className="fa-brands fa-square-facebook"></i>
              <i css={socialIcon} className="fa-brands fa-instagram"></i>
              <i css={socialIcon} className="fa-brands fa-square-twitter"></i>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}

export default Communications;