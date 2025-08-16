'use client';
import UserAvatar from './UserAvatar';

interface ChatUserListItemProps {
  chatId: string | number;
  name: string;
  lastMessage?: string;
  time?: string;
  imageUrl?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ChatUserItem: React.FC<ChatUserListItemProps> = ({
  name,
  lastMessage,
  time,
  imageUrl,
  isActive = false,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`border-b border-secondary transition duration-300 ease-in-out ${
        isActive ? 'bg-blue-100' : 'hover:bg-gray-100'
      }`}
    >
      <div className="flex cursor-pointer items-center gap-3 p-3">
        <UserAvatar
          name={name}
          imageUrl={imageUrl}
          className="border-2 border-tertiary"
        />
        <div className="flex flex-1 flex-col overflow-hidden text-xs">
          <span className="truncate font-bold text-gray-900">{name}</span>
          <span className="truncate text-gray-700">{lastMessage || ''}</span>
        </div>
        {time && (
          <span className="whitespace-nowrap text-xs text-gray-400">
            {time}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatUserItem;
