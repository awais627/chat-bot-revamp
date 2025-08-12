import Card from '@/components/ui/Cards/Card';
import { FaRegFileAlt } from 'react-icons/fa';
import Link from 'next/link';

interface Article {
  title: string;
  link: string;
  time?: string;
}

interface RecentArticlesProps {
  articles: Article[];
}
const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Card title="Recent Articles">
      <ul className="divide-y divide-gray-200">
        {articles.map((article, idx) => (
          <li
            key={idx}
            className="transaction-shadow flex items-start gap-3 px-3 py-3 text-sm transition duration-200 hover:cursor-pointer hover:bg-gray-50 hover:shadow-md"
          >
            <Link href={article.link} className="flex w-full items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-blue-light)] text-[var(--bg-tertiary)]">
                <FaRegFileAlt size={14} />
              </div>
              <div className="flex-1">
                <span className="font-medium">{article.title}</span>
                {article.time && (
                  <div className="text-xs text-gray-500">{article.time}</div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button className="mt-4 rounded bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-2.5 text-sm text-white">
          View All Articles
        </button>
      </div>
    </Card>
  );
};

export default RecentArticles;
