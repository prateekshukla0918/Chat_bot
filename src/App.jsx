import React from "react";
// import { Toaster } from "./components/ui/toaster";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
// import Header from "./components/Header";
import { useChatBot } from "./hooks/useChatBot";

function App() {
  const {
    messages,
    inputValue,
    isLoading,
    handleInputChange,
    handleSendMessage,
    handleToggleTheme
  } = useChatBot();

  return (
    <div className="max-w-lg mx-auto h-screen flex flex-col bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <Header toggleTheme={handleToggleTheme} />
      <ChatWindow messages={messages} isLoading={isLoading} />
      <InputBox
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
      />
      <Toaster />
    </div>
  );
}

export default App;