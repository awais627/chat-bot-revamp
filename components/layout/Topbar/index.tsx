'use client';

import { useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineLogout } from 'react-icons/md';
import { useHandleClickOutside } from '@/hooks/useClickOutside';

interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

interface TopBarProps {
  user: User;
}
const TopBar: React.FC<TopBarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // calling Handle click outside hook to close dropdown
  useHandleClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <header className="flex w-full items-center justify-end border-b bg-white px-6 py-3 shadow-[0px_13px_16px_-19px_#6518cf]">
      <div className="relative flex items-center gap-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="h-10 w-10 rounded-full border border-gray-200 object-cover"
            />
          </button>

          {isOpen && (
            <div
              // ref={dropdownRef}
              className="absolute right-0 z-50 mt-2 w-48 rounded-lg border bg-white shadow-lg"
            >
              <div className="border-b px-4 py-2">
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <ul className="py-2">
                <li>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                    <FaRegUser className="h-4 w-4" />
                    Profile
                  </button>
                </li>
                <li>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <MdOutlineLogout className="h-4 w-4" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
