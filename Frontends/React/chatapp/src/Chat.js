import { ChatBubble } from "./ChatBubble"
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
export function Chat() {
    let handleKeyPress = (e) => {
        console.log(e)
        if(e.key == "Enter") {
            console.log("Enter")
        }
    }
    return(
        <section id="Chat">
            <div style={{ position: "relative", height: "500px" }}>
                <MainContainer>
                    <ChatContainer>
                    <MessageList>
                        <Message
                        model={{
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe",
                        }}
                        />
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                    </ChatContainer>
                </MainContainer>
            </div>
        </section>
    )
}