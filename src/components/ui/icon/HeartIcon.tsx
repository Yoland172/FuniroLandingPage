import { IconProps } from "../../../types/Types";


const HeartIcon = ({width,height}:IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"  
    >
      <path
        d="M11.9996 21.0542C-8 10 5.99999 -1.99997 11.9996 5.58809C18 -1.99997 32 10 11.9996 21.0542Z"
        stroke="#262F56"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default HeartIcon;
