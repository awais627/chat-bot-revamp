'use client';

import ChatSidebar from '@/components/SupportChat/ChatSidebar';
import ChatWindow from '@/components/SupportChat/ChatWindow';
import { ChatProvider } from '@/contexts/chatContext';

const SupportChat: React.FC = () => {
  return (
    <ChatProvider>
      <div className="card-shadow mb-7 mt-7 grid h-screen grid-cols-[0.35fr_1fr] rounded-xl bg-secondary">
        <ChatSidebar onSelectChat={(id) => console.log('Selected chat:', id)} />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
};

export default SupportChat;
