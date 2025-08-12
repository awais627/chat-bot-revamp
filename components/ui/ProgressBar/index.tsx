interface ProgressBarProps {
  percentage: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color }) => {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
      <div className={`h-full ${color}`} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
