/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// Styled Components
import Container from "../styled-components/Container";
import SectionLayout from "../styled-components/SectionLayout";
import SectionImg from "../styled-components/SectionImg";
import SectionContent from "../styled-components/SectionContent";
import SectionHeading from "../styled-components/SectionHeading";
import SectionP from "../styled-components/SectionP";

// Images
import flowingConversationsImg from "../assets/illustration-flowing-conversation.svg";

// Styles
const sectionFlowingConversations = css`
  padding: clamp(4rem, 10.666666vw, 10rem) 0;
`;

function FlowingConversations() {
  return (
    <section css={sectionFlowingConversations}>
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
    </section>
  );
}

export default FlowingConversations;