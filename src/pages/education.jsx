import { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = process.env.REACT_APP_GPT_API_KEY;

export const Education = () => {
  const systemMessage = {
    role: 'system',
    content: "Explain things like you're talking to someone trying to be educated in finance.",
  };

  const [messages, setMessages] = useState([
    {
      message: 'Hello, Ask me any finance questions!',
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    const apiMessages = chatMessages.map((msg) => ({
      role: msg.sender === 'ChatGPT' ? 'assistant' : 'user',
      content: msg.message,
    }));

    const apiRequestBody = {
      model: 'gpt-4.1-mini',
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiRequestBody),
      });

      const data = await response.json();

      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: 'ChatGPT',
        },
      ]);
    } catch (err) {
      console.error('API Error:', err);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    const messageList = document.getElementById('message-list');
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-screen bg-white" style={{ height: '90vh' }}>
      <MainContainer style={{ height: '95%', width: '100%' }}>
        <ChatContainer style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <MessageList
            id="message-list"
            scrollBehavior="smooth"
            typingIndicator={isTyping ? <TypingIndicator content="Typing..." /> : null}
            style={{ flex: 1, overflowY: 'auto', paddingTop: '3rem', paddingBottom: '1rem' }}
          >
            {messages.map((msg, i) => (
              <Message
                key={i}
                model={{
                  message: msg.message,
                  sentTime: msg.sentTime,
                  sender: msg.sender,
                  direction: msg.sender === 'user' ? 'outgoing' : 'incoming',
                }}
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
  );
};
