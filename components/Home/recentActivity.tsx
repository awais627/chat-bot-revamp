import Card from '@/components/ui/Cards/Card';
import { FaInfoCircle, FaSyncAlt } from 'react-icons/fa';

interface Activity {
  title: string;
  subtitle: string;
  time: string;
  id: string;
  icon?: 'info' | 'user';
  color?: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const iconMap = {
  info: FaInfoCircle,
  user: FaSyncAlt
};

const RecentActivity: React.FC<RecentActivityProps> = ({ activities  }) => {
  return (
    <Card title="Recent Activity">
      <div className="">
        {activities.map((activity, idx) => {
          const Icon = iconMap[activity.icon ?? 'info'] || FaInfoCircle;
          return (
            <div
              key={idx}
              className="mb-2 flex items-start justify-between rounded-lg bg-[var(--bg-secondary)] p-3"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${activity.color}`}
                >
                  <Icon className="text-sm text-[var(--bg-tertiary)]" />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    {activity.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {activity.subtitle}
                  </div>
                  <div className="mt-1 inline-block rounded bg-gray-300 px-2 py-0.5 font-mono text-xs text-gray-600">
                    ID: {activity.id}
                  </div>
                </div>
              </div>
              <span className="whitespace-nowrap text-xs text-gray-400">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default RecentActivity;
