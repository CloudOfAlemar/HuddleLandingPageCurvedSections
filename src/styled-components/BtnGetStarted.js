import styled from "@emotion/styled";

const BtnGetStarted = styled.button`
  font-size: clamp(1.2rem, 3.2vw, 2rem);
  line-height: clamp(1.8rem, 4.8vw, 3rem);
  font-weight: bold;
  padding: clamp(1.1rem, 2.933333vw, 2.5rem) clamp(3.95rem, 10.533333vw, 9.95rem);
  border: none;
  border-radius: clamp(2rem, 5.333333vw, 4rem);
  background-color: var(--dark-pink);
  color: #FFFFFF;
  transition: background-color 350ms;
  &:hover {
    background-color: var(--pink);
    cursor: pointer;
  }
`;

export default BtnGetStarted;