import { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = process.env.REACT_APP_GPT_API_KEY;

export const Education = () => {
  const systemMessage = {
    "role": "system", "content": "Explain things like you're talking to someone trying to be educated in finance."
  };
  const [messages, setMessages] = useState([
    {
      message: "Hello, Ask me any finance questions!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-4o-mini",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => data.json())
      .then((data) => {
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
        setIsTyping(false);
      });
  }

  useEffect(() => {
    // Scroll to the bottom when messages change
    const messageList = document.getElementById('message-list');
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-gray-300 rounded-lg bg-white w-full max-w-md">
        <MainContainer style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
          <ChatContainer style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
            <MessageList
              id="message-list"
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="Typing..." /> : null}
              style={{ flex: 1, overflowY: 'auto', paddingBottom: '60px' }}
            >
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{ ...message, direction: message.sender === "user" ? "outgoing" : "incoming" }}
                />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Type your question here"
              onSend={handleSend}
              style={{
                padding: '10px',
                boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
                zIndex: 1,
              }}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};
