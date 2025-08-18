import type { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  type = 'text',
  onChange,
  name,
  className
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    name={name}
    className={`rounded-lg border px-3 py-2 outline-none ${className}`}
  />
);

export default Input;
