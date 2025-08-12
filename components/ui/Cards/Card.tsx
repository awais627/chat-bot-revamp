import { ReactNode, ComponentType } from 'react';

interface CardProps {
  title?: string;
  icon?: ComponentType<{ className?: string }>;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({
  title,
  icon: Icon,
  actions,
  children,
  className = ''
}) => {
  return (
    <div
      className={`rounded-lg bg-white p-4 shadow-[0_0_10px_0_#d9d9d9] ${className}`}
    >
      {(title || Icon || actions) && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-5 w-5 text-gray-500" />}
            {title && (
              <h2 className="text-md font-semibold text-gray-700">{title}</h2>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
