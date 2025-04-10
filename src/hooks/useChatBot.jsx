import { useState, useEffect, useRef } from "react";
import { getBotResponse } from "../lib/botResponses";
import { getFormattedTime } from "../lib/utils";

export const useChatBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi there! I'm ChatBot. How can I help you today?",
      isUser: false,
      timestamp: getFormattedTime()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Toggle theme function
  const handleToggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // Handle send message
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    const userMessage = inputValue.trim();
    if (!userMessage) return;
    
    // Add user message to chat
    const newUserMessage = {
      text: userMessage,
      isUser: true,
      timestamp: getFormattedTime()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      
      const newBotMessage = {
        text: botResponse,
        isUser: false,
        timestamp: getFormattedTime()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsLoading(false);
    }, 1000);
  };
  
  // Load messages from localStorage on initial render
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Failed to parse saved messages", error);
      }
    }
  }, []);
  
  // Save messages to localStorage when they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);
  
  return {
    messages,
    inputValue,
    isLoading,
    handleInputChange,
    handleSendMessage,
    handleToggleTheme
  };
};
 