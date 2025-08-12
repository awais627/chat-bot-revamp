'use client';
import { ComponentType } from 'react';
import {
  HiMiniArrowTrendingUp,
  HiMiniArrowTrendingDown
} from 'react-icons/hi2';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ComponentType<{ className?: string }>;
  customClassName: string;
  subtitle?: string;
  comparisonText?: string;
  percentage?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  customClassName,
  subtitle,
  comparisonText,
  percentage
}) => {
  const isPositive = percentage !== undefined && percentage >= 0;
  return (
    <div className="rounded-xl bg-white p-4 shadow-[0_0_10px_0_#f2f2f2]">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-16 w-16 translate-y-[-35px] items-center justify-center rounded-xl bg-[#f5f6f8] text-white shadow-lg`}
        >
          {Icon && <Icon className={`h-8 w-8 ${customClassName ?? ''}`} />}
        </div>
        <div>
          <p className="text-xs font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-700">{value}</h3>
        </div>
      </div>
      {/* <p className="mt-1 text-xs text-gray-400">{subtitle}</p> */}
      {/* <hr className="my-2 border-gray-200" /> */}

      {percentage !== undefined && comparisonText && (
        <div className="mt-2 flex items-center gap-1 text-sm">
          {isPositive ? (
            <HiMiniArrowTrendingUp className="text-green-500" />
          ) : (
            <HiMiniArrowTrendingDown className="text-red-500" />
          )}
          <span
            className={
              isPositive
                ? 'font-semibold text-green-500'
                : 'font-semibold text-red-500'
            }
          >
            {isPositive ? `+${percentage}%` : `${percentage}%`}
          </span>
          <span className="text-xs text-gray-400">{comparisonText}</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
