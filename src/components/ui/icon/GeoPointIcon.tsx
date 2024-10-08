import { IconProps } from "../../../types/Types";

const GeoPointIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.974 18.5413C13.0898 17.0976 17.9167 13.3048 17.9167 8.74992C17.9167 4.37766 14.3723 0.833252 10 0.833252C5.62775 0.833252 2.08333 4.37766 2.08333 8.74992C2.08333 13.3048 6.91025 17.0976 9.02596 18.5413C9.61759 18.945 10.3824 18.945 10.974 18.5413ZM10 11.2499C11.3807 11.2499 12.5 10.1306 12.5 8.74992C12.5 7.36921 11.3807 6.24992 10 6.24992C8.61929 6.24992 7.5 7.36921 7.5 8.74992C7.5 10.1306 8.61929 11.2499 10 11.2499Z"
        fill="#898989"
      />
    </svg>
  );
};

export default GeoPointIcon;
