'use client';
import Image from 'next/image';
import ChatIcon from '@/images/chat-icon.png';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './ChatMessage';
import { useChat } from '@/contexts/chatContext';

export const ChatWindow = () => {
  const { selectedUser } = useChat();

  if (!selectedUser) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-gray-500">
        <Image src={ChatIcon} alt="chat" width={200} height={200} />
        <h3>Welcome to Support Chat</h3>
        <p>Pick a person from left menu and start conversation</p>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col">
      <ChatHeader />
      <MessageList />
    </div>
  );
};
