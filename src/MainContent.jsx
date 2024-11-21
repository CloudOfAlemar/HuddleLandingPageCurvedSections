/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react";

// JSX Features
import GrowTogether from "./features/GrowTogether";
import FlowingConversations from "./features/FlowingConversations";
import YourUsers from "./features/YourUsers";
import Closing from "./features/Closing";

// Styles

function MainContent() {
  return (
    <main>
      <GrowTogether />
      <FlowingConversations />
      <YourUsers />
      <Closing />
    </main>
  );
}

export default MainContent;