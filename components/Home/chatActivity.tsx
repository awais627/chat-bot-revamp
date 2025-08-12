import Card from '@/components/ui/Cards/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import { FiRefreshCcw } from 'react-icons/fi';

interface ActivityProps {
  label: string;
  percentage: number;
  count: number;
  color: string;
}
interface ChatActivityProps {
  data: ActivityProps[];
}

const ChatActivity: React.FC<ChatActivityProps> = ({ data }) => {
  return (
    <Card
      title="Chat Activity"
      actions={
        <button>
          <FiRefreshCcw className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </button>
      }
    >
      <div className="h-[80%] space-y-5 overflow-y-auto">
        {data.map((item, idx) => (
          <div key={idx}>
            <div className="mb-1 flex flex-1 justify-between text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${item.color}`}></span>
                <span>{item.label}</span>
              </span>
              <span className="text-xs">
                {item.percentage}% ({item.count})
              </span>
            </div>
            <ProgressBar percentage={item.percentage} color={item.color} />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-gray-600"> Total Activity: </span>
        <span className="text-sm font-bold text-gray-800">
          {data.reduce((a, b) => a + b.count, 0)}
        </span>
      </div>
    </Card>
  );
};

export default ChatActivity;
