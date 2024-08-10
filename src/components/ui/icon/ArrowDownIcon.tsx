import { IconProps } from "../../../types/Types";

const ArrowDownIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.8333 7.50012L10 13.3335L4.16668 7.50012"
        stroke="#3A3A3A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
