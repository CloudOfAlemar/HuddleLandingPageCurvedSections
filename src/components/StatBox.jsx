/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const statIcon = css`
  width: clamp(3.5rem, 9.333333vw, 5.6rem);
`;

const statNumber = css`
  font-size: clamp(6rem, 16vw, 9.6rem);
  line-height: clamp(9.1rem, 24.266666vw, 14.4rem);
  font-weight: bold;
`;

const statText = css`
  font-size: clamp(1.5rem, 4vw, 2.4rem);
  line-height: clamp(2.3rem, 6.133333vw, 3.6rem);
  color: var(--gray-text);
  text-align: center;
`;

function StatBox({img, stat, text, altText}) {
  return (
    <div>
      <img css={statIcon} src={img} alt={altText} />
      <p css={statNumber}>{stat}</p>
      <p css={statText}>{text}</p>
    </div>
  );
}

export default StatBox;