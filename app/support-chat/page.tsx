'use client';

import { ChatSidebar } from '@/components/SupportChat/ChatSidebar';
import { ChatWindow } from '@/components/SupportChat/ChatWindow';
import { ChatProvider } from '@/contexts/chatContext';

const SupportChat: React.FC = () => {
  return (
    <ChatProvider>
      <div className="mb-7 mt-7 grid h-screen grid-cols-[0.35fr_1fr] rounded-xl bg-secondary shadow-[0_0_5px_0_#d9d9d9]">
        <ChatSidebar onSelectChat={() => {}} />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
};

export default SupportChat;
