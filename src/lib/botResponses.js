// Bot responses based on user input
const responses = {
    'hello': 'Hello! How can I help you today?',
    'hi': 'Hi there! What can I do for you?',
    'hey': 'Hey! How can I assist you?',
    'how are you': 'I\'m just a chat bot, but I\'m functioning well! How are you?',
    'weather': 'I don\'t have real-time weather data, but I hope it\'s nice where you are!',
    'joke': 'Why don\'t scientists trust atoms? Because they make up everything!',
    'another joke': 'How does a computer get drunk? It takes screenshots!',
    'tell me a joke': 'What did the router say to the doctor? "It hurts when IP."',
    'time': () => `The current time is ${new Date().toLocaleTimeString()}`,
    'date': () => `Today is ${new Date().toLocaleDateString()}`,
    'help': 'I can respond to greetings, tell jokes, or show the time and date. Try asking me about:\n• Weather\n• Jokes\n• Time or date\n• My features\n• Or just say hi!',
    'bye': 'Goodbye! Come back soon!',
    'features': 'I support:\n• Chat message history\n• Timestamps for messages\n• Dark/light mode toggle\n• Responsive design\n• Memory of our conversation\n• Auto-scrolling to new messages',
    'what can you do': 'I can chat with you! Try asking me for a joke, the time, or about my features.',
    'about': 'I\'m a React-based chat bot demo. I\'m fully frontend with no backend connections. I was built with React.js and styled with Tailwind CSS.',
    'who made you': 'I was created as a React.js demonstration project to showcase frontend development skills.',
    'clear': 'I can\'t clear the chat history myself, but you can refresh the page to start over!'
  };
  
  // Get response based on user input
  export function getBotResponse(text) {
    text = text.toLowerCase();
    
    // Check for exact matches
    if (responses[text]) {
      return typeof responses[text] === 'function' 
        ? responses[text]() 
        : responses[text];
    }
    
    // Check for partial matches
    for (const key in responses) {
      if (text.includes(key)) {
        return typeof responses[key] === 'function' 
          ? responses[key]() 
          : responses[key];
      }
    }
    
    // Default response
    return "I'm not sure how to respond to that. Try asking me about the weather, telling me a joke, or type 'help' for more options!";
  }
  