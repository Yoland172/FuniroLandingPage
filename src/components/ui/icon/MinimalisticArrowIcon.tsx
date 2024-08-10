import { IconProps } from "../../../types/Types";

const MinimalisticArrowIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 1L0.999924 8L7.99992 15"
        stroke="#E89F71"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinimalisticArrowIcon;
