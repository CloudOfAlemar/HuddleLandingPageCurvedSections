import styled from "@emotion/styled";

const DividerImgDesktopTop = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  display: none;
  @media (min-width: 1340px) {
    display: block;
  }
`;

export default DividerImgDesktopTop;