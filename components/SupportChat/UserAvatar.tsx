import Image from 'next/image';
import type { UserAvatarProps } from './UserAvatar.types';

const getInitials = (name: string) => {
  if (!name) {
    return;
  }
  return name.charAt(0).toUpperCase();
};
export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  className,
  imageUrl
}) => {
  return (
    <>
      {imageUrl ? (
        <div className="overflow-hidden rounded-full">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="h-[50px] w-[50px] object-cover"
          />
        </div>
      ) : (
        <div
          className={`${className} flex h-10 w-10 items-center justify-center rounded-full bg-purple text-xl font-semibold text-white`}
        >
          {getInitials(name)}
        </div>
      )}
    </>
  );
};
