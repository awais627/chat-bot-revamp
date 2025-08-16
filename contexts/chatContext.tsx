'use client';

import { mockUsers } from '@/data/constant/users';
import { useContext, createContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  text: string;
  sender: string;
  time: string;
}
interface User {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isActive: boolean;
  messages: Message[];
}

interface ChatContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(mockUsers);

  return (
    <ChatContext.Provider
      value={{ selectedUser, setSelectedUser, users, setUsers }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('something wrong');
  }
  return context;
};
