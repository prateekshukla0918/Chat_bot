import React from "react";

const MessageBubble = ({ text, isUser, timestamp }) => {
  // Function to render message content with list items if needed
  const renderMessageContent = () => {
    // Check if the text contains a list (indicated by bullet points)
    if (text.includes("•") || text.includes("-") || text.includes("*")) {
      // Split by newlines and process each line
      const lines = text.split("\n");
      return lines.map((line, index) => {
        if (line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("*")) {
          // This is a list item
          return (
            <li key={index} className="ml-5 mt-1">
              {line.trim().substring(1).trim()}
            </li>
          );
        } else {
          // Regular paragraph
          return line ? <p key={index} className={index > 0 ? "mt-1" : ""}>{line}</p> : null;
        }
      });
    }
    
    // If no list indicators found, just return the text
    return <p>{text}</p>;
  };

  return (
    <div className={`flex items-end mb-4 ${isUser ? "justify-end" : ""}`}>
      <div className={`flex flex-col space-y-1 max-w-[75%] ${isUser ? "items-end" : ""}`}>
        <div 
          className={`p-3 ${
            isUser 
              ? "bg-primary text-white rounded-t-xl rounded-l-xl" 
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-t-xl rounded-r-xl"
          }`}
        >
          {typeof text === "string" && text.includes("\n") || text.includes("•") ? (
            <div className="message-content">
              {renderMessageContent()}
            </div>
          ) : (
            <p>{text}</p>
          )}
        </div>
        <span className={`text-xs text-gray-500 dark:text-gray-400 ${isUser ? "mr-1" : "ml-1"}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
