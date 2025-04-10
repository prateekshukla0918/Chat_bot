import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import LoadingIndicator from "./LoadingIndicator";

const ChatWindow = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 scroll-smooth" id="chatWindow">
      <div className="space-y-4 pb-4">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isLoading && <LoadingIndicator />}
        
        {/* Invisible element for scrolling to bottom */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
