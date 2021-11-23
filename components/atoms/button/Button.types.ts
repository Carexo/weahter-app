import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  onClick: () => void;
}
