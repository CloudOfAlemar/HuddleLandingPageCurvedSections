/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Styled Components
import SectionParent from "../styled-components/SectionParent";
import Container from "../styled-components/Container";
import SectionLayout from "../styled-components/SectionLayout";
import SectionImg from "../styled-components/SectionImg";
import SectionContent from "../styled-components/SectionContent";
import SectionHeading from "../styled-components/SectionHeading";
import SectionP from "../styled-components/SectionP";

// Images
import flowingConversationsImg from "../assets/illustration-flowing-conversation.svg";

// Styles
const sectionParent = css`
  padding: clamp(20rem, 53.333333vw, 35rem) var(--edge-padding);
`;

function FlowingConversations() {
  return (
    <SectionParent css={sectionParent}>
      <Container>
        <SectionLayout>

          {/* Section Img */}
          <SectionImg src={flowingConversationsImg}/>

          {/* Section Content */}
          <SectionContent>
            <SectionHeading>Flowing Conversations</SectionHeading>
            <SectionP>
            You wouldn't paginate a conversation in real life, so why do it online?
            Our threads have just-in-time loading for a more natural flow. 
            </SectionP>
          </SectionContent>

        </SectionLayout>
      </Container>
    </SectionParent>
  );
}

export default FlowingConversations;