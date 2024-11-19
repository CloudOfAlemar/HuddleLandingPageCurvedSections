import styled from "@emotion/styled";

const DividerImgDesktopBottom = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  display: none;
  @media (min-width: 1340px) {
    display: block;
  }
`;

export default DividerImgDesktopBottom;