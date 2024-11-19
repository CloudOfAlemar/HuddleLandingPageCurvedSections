import styled from "@emotion/styled";

const DividerImgMobileTop = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  @media (min-width: 1340px) {
    display: none;
  }
`;

export default DividerImgMobileTop;