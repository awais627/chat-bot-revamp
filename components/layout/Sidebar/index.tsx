'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { HiChatAlt2 } from 'react-icons/hi';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import { IoVideocamOutline } from 'react-icons/io5';
import { TbPuzzle } from 'react-icons/tb';
import { FiRefreshCw } from 'react-icons/fi';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  // Helper functions to determine active link styles
  const linkClasses = (isActive: boolean) =>
    `flex items-center gap-x-3 rounded-lg px-4 py-2 transition-colors duration-200
      ${isActive ? 'bg-gradient-primary text-white' : 'text-black hover:bg-gray-200'}
    `;

  const iconClasses = (isActive: boolean) =>
    `${isActive ? 'text-white' : 'text-black group-hover:text-white'}`;

  return (
    <aside
      className={`${styles.sidebar} flex h-screen w-64 flex-col px-2 py-6 text-sm shadow-[11px_0px_16px_-16px_purple]`}
    >
      <div className="mb-8 text-2xl font-bold">Traction Admin</div>

      {/* Main Navigation */}
      <div className="flex flex-col gap-4">
        <Link href="/home" className={linkClasses(pathname === '/home')}>
          <RiHomeSmile2Line
            size={20}
            className={iconClasses(pathname === '/home')}
          />
          Dashboard
        </Link>

        <span className="text-gray-medium mt-4 px-3 text-xs uppercase tracking-wider">
          Customer Support
        </span>
        <Link
          href="/support-chat"
          className={linkClasses(pathname === '/support-chat')}
        >
          <HiChatAlt2
            size={25}
            className={iconClasses(pathname === '/support-chat')}
          />
          Support Chat{' '}
          <span className="bg-tertiary ml-auto rounded-xl px-3 py-1 text-end text-xs text-white">
            New
          </span>
        </Link>

        <span className="text-gray-medium mt-4 px-3 text-xs uppercase tracking-wider">
          Knowledge Base
        </span>
        <Link
          href="/articles"
          className={linkClasses(pathname === '/articles')}
        >
          <HiOutlineBookOpen
            size={20}
            className={iconClasses(pathname === '/articles')}
          />
          Articles
          <span
            className={`bg-blue-light ml-auto rounded-xl px-3 py-1 text-xs ${
              pathname === '/articles' ? 'text-purple' : 'text-black'
            } `}
          >
            Zoho
          </span>
        </Link>
        <Link
          href="/sync-manager"
          className={linkClasses(pathname === '/sync-manager')}
        >
          <FiRefreshCw
            size={20}
            className={iconClasses(pathname === '/sync-manager')}
          />
          Sync Manager
          <span
            className={`bg-blue-light ml-auto rounded-xl px-3 py-1 text-xs ${
              pathname === '/sync-manager' ? 'text-purple' : 'text-black'
            }`}
          >
            Sync
          </span>
        </Link>
        <Link href="/videos" className={linkClasses(pathname === '/videos')}>
          <IoVideocamOutline
            size={20}
            className={iconClasses(pathname === '/videos')}
          />
          Videos
          <span
            className={`bg-blue-light ml-auto rounded-xl px-3 py-1 text-xs ${
              pathname === '/videos' ? 'text-purple' : 'text-black'
            }`}
          >
            Media
          </span>
        </Link>
        <Link
          href="/widget-config"
          className={linkClasses(pathname === '/widget-config')}
        >
          <TbPuzzle
            size={20}
            className={iconClasses(pathname === '/widget-config')}
          />
          Widget Config
          <span className="bg-tertiary ml-auto rounded-xl px-3 py-1 text-xs text-white">
            New
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
