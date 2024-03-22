import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
  } from "@chatscope/chat-ui-kit-react";
export function ChatBubble({text, sentTime, sender, direction, position}) {
    return(
        <Message model={{
            message: text
        }}>

        </Message>
    )
}