import styled from "@emotion/styled";

const DividerImgMobileBottom = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  @media (min-width: 1340px) {
    display: none;
  }
`;

export default DividerImgMobileBottom;