import { useChat } from '@/contexts/chatContext';
import { UserAvatar } from './UserAvatar';

export const ChatHeader: React.FC = () => {
  const { selectedUser } = useChat();
  if (!selectedUser) return <></>;
  return (
    <div className="flex items-center gap-3 border-b bg-white p-4 shadow-sm">
      <UserAvatar
        className="text-black"
        name={selectedUser.name}
        imageUrl={selectedUser.avatar}
      />
      <div>
        <h2 className="font-medium text-gray-900">{selectedUser.name}</h2>
      </div>
    </div>
  );
};
