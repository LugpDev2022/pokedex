interface Props {
  size?: number;
  className?: string;
}

export const PersonIcon = ({ size = 30, className = "" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-person-fill ${className}`}
    viewBox="0 0 16 16"
    data-testid='svg'
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);
