// Format current time for messages
export function getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  
  // Helper function to parse message text with lists
  export function parseMessageText(text) {
    if (!text.includes('\n')) return text;
    
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
        return {
          type: 'listItem',
          content: line.substring(1).trim(),
          key: `item-${index}`
        };
      }
      return {
        type: 'text',
        content: line,
        key: `text-${index}`
      };
    });
  }
  // Helper function for merging class names (used by shadcn components)
export function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
  }