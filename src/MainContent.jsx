/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// JSX Features
import GrowTogether from "./features/GrowTogether";
import FlowingConversations from "./features/FlowingConversations";

// Styles

function MainContent() {
  return (
    <main>
      <GrowTogether />
      <FlowingConversations />
    </main>
  );
}

export default MainContent;