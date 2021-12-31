import { ReactNode, MouseEvent } from "react";

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  onClick: (event: MouseEvent) => void;
}
