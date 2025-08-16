'use client';
import { useChat } from '@/contexts/chatContext';

const MessageList = () => {
  const { selectedUser } = useChat();

  if (!selectedUser) {
    return (
      <div className="flex h-full items-center justify-center text-gray-400">
        No chat selected
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-4">
      {selectedUser.messages.map((msg) => {
        const isMe = msg.sender === 'me';
        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`w-full max-w-[30%] rounded-lg px-4 py-4 text-sm ${
                isMe
                  ? 'ml-auto bg-purple text-white'
                  : 'text-gray bg-blue-light'
              }`}
            >
              <p>{msg.text}</p>
            </div>
            <small
              className={`mt-1 text-xs text-gray-medium ${
                isMe ? 'text-right' : 'text-left'
              }`}
            >
              {msg.time}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
