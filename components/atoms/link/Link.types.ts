import { ReactNode } from "react";

export interface LinkProps {
  component?: "a";
  href: string;
  children: ReactNode;
}
