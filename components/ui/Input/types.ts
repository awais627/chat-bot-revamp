export interface InputProps {
  value: string;
  placeholder?: string;
  type?: string;
  name: string;
  onChange: (value: string) => void;
  className?: string;
}
