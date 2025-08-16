'use client';

import { useState } from 'react';
import ChatUserListItem from './UserListItem';
import { useChat } from '@/contexts/chatContext';
import UserAvatar from './UserAvatar';
import SearchUser from './ChatSearchBar';

interface ChatSidebarProps {
  onSelectChat: (chatId: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ onSelectChat }) => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [searchUser, setSearchUser] = useState('');
  const { users, setSelectedUser } = useChat();

  const filterSearch = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  const handleUserClick = (userId: string) => {
    const clickedUser = users.find((u) => u.id === userId);
    if (clickedUser) {
      setSelectedUser(clickedUser);
      setActiveChatId(userId);
      localStorage.setItem('selectedUserId', userId);
    }
  };

  return (
    <div className="overflow-auto rounded-[15px_0_0_15px] bg-white text-black">
      <div className="flex items-center gap-3 border-b border-gray-light px-4 py-3">
        <UserAvatar
          className="text-black"
          name="Jhon Doe"
          imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div>
          <p className="text-xs font-bold">Jhon Doe</p>
          <small className="flex text-xs">My Account</small>
        </div>
      </div>
      <SearchUser searchUser={searchUser} setSearchUser={setSearchUser} />
      {filterSearch.map((user) => (
        <ChatUserListItem
          key={user.id}
          chatId={user.id}
          name={user.name}
          lastMessage={user.lastMessage}
          time={user.time}
          imageUrl={user.avatar}
          isActive={activeChatId === user.id}
          onClick={() => handleUserClick(user.id)}
        />
      ))}
    </div>
  );
};

export default ChatSidebar;
