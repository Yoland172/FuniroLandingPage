import { MouseEventHandler } from "react";

export interface IconProps {
  width: number;
  height: number;
}

export interface ArrowProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}
