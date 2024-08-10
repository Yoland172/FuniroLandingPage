import { IconProps } from "../../../types/Types";

const SearchIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.6666 16.6667L12.5801 12.5802M12.5801 12.5802C13.5604 11.6 14.1666 10.2458 14.1666 8.75004C14.1666 5.7585 11.7415 3.33337 8.74998 3.33337C5.75844 3.33337 3.33331 5.7585 3.33331 8.75004C3.33331 11.7416 5.75844 14.1667 8.74998 14.1667C10.2458 14.1667 11.5999 13.5604 12.5801 12.5802Z"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
