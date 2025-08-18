export interface ChatUserListItemProps {
  chatId: string | number;
  name: string;
  lastMessage?: string;
  time?: string;
  imageUrl?: string;
  isActive?: boolean;
  onClick?: () => void;
}
