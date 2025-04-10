import React from "react";
// import { RiSendPlaneFill } from "react-icons/ri";

const InputBox = ({ inputValue, handleInputChange, handleSendMessage }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 sticky bottom-0">
      <form className="flex items-center space-x-2" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!inputValue.trim()}
        >
          <RiSendPlaneFill />
        </button>
      </form>
    </div>
  );
};

export default InputBox;
