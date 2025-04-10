import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="flex items-end mb-4">
      <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-800 dark:text-white flex items-center space-x-1">
        <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce"></div>
        <div 
          className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce" 
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div 
          className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce" 
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
