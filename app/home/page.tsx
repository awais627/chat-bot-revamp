'use client';

import StatsCard from '@/components/ui/Cards/StatsCard';
import { HiChatAlt2 } from 'react-icons/hi';
import { PiChatTeardropBold } from 'react-icons/pi';
import { LuUnplug } from 'react-icons/lu';
import { HiOutlineBookOpen } from 'react-icons/hi2';

import ChatActivity from '../../components/Home/chatActivity';
import ChatStatusDistribution from '../../components/Home/chatStatusDistribution';
import RecentActivity from '../../components/Home/recentActivity';
import RecentArticles from '../../components/Home/recentArticles';

const Home = () => {
  return (
    <div className="pb-5 pt-[3rem]">
      <h2 className="text-2xl">
        <span className="font-medium text-gray-500">Traction Support</span> /
        <span className="font-bold">Dashboard</span>
      </h2>
      <p className="text-gray-400">
        Welcome to your Traction Support dashboard
      </p>

      <h3 className="pt-6 font-bold text-gray-700">Overview</h3>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Active Chats"
          value="1,245"
          icon={HiChatAlt2}
          customClassName="text-tertiary"
          subtitle="Currently active conversations"
          percentage={12}
          comparisonText="vs last month"
        />
        <StatsCard
          title="Active Users"
          value="10,500"
          icon={PiChatTeardropBold}
          customClassName="text-blue-medium"
          subtitle="Active Chats"
          percentage={-3}
          comparisonText="vs last month"
        />
        <StatsCard
          title="Socket Status"
          value="running"
          icon={LuUnplug}
          customClassName="text-green-medium"
          subtitle="Connection status"
        />
        <StatsCard
          title="Active Users"
          value="10,500"
          icon={HiOutlineBookOpen}
          customClassName="text-dark-blue"
          subtitle="Latest knowledge base articles"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-4">
        <ChatActivity
          data={[
            {
              label: 'Last Hour',
              percentage: 20,
              count: 20,
              color: 'bg-[var(--bg-dark-blue)]'
            },
            {
              label: 'Last 24 Hours',
              percentage: 21.7,
              count: 114,
              color: 'bg-[var(--bg-blue-medium)]'
            },
            {
              label: 'Last Week',
              percentage: 78.3,
              count: 412,
              color: 'bg-[var(--bg-tertiary)]'
            }
          ]}
        />
        <ChatStatusDistribution
          data={[
            {
              label: 'Active',
              percentage: 100,
              count: 546,
              color: 'bg-[var(--bg-blue-medium)]'
            },
            {
              label: 'Inactive',
              percentage: 20,
              count: 0,
              color: 'bg-[var(--bg-gray)]'
            },
            {
              label: 'Archived',
              percentage: 5,
              count: 0,
              color: 'bg-[var(--bg-tertiary)]'
            },
            {
              label: 'Blocked',
              percentage: 2,
              count: 0,
              color: 'bg-[var(--bg-red)]'
            }
          ]}
        />
      </div>
      <div className="mt-8 grid grid-cols-[1fr_0.4fr] gap-4">
        <RecentActivity
          activities={[
            {
              title: 'User joined the chat',
              time: '2 hours ago',
              id: 'evtyB8C75OJiS',
              icon: 'info',
              subtitle: 'User: John Doe',
              color: 'bg-[var(--bg-blue-light)]'
            },
            {
              title: 'Agent replied to ticket',
              time: '3 hours ago',
              id: 'evtyB8C75OJiS',
              icon: 'user',
              subtitle: 'Agent: Jane Smith',
              color: 'bg-[var(--bg-blue-light)]'
            }
          ]}
        />
        <RecentArticles
          articles={[
            {
              title: 'How to manage active chats',
              link: '#',
              time: '3 hours ago'
            },
            {
              title: 'Best practices for chat support',
              link: '#',
              time: '1 hours ago'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
