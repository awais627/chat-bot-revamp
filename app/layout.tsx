import { ReactNode } from 'react';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/Topbar';

export const metadata = {
  title: 'Chat Bot Revamp',
  description: 'A modern chat bot application'
};

interface rootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: rootLayoutProps) {
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };
  return (
    <html lang="en">
      <body className="flex" suppressHydrationWarning>
        <div className="flex-[0_0-250px]">
          <Sidebar />
        </div>
        <div className="container">
          <TopBar user={mockUser} />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
