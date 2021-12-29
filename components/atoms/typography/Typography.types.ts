import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  el: "h1" | "h2" | "h3" | "p";
  size?: 12 | 14 | 16 | 18 | 24 | 36 | 48 | 64 | 144;
  weight?: 400 | 500 | 600 | 700;
  color?: "white" | "lightGray" | "gray" | "darkGray" | "darkestGray";
}
