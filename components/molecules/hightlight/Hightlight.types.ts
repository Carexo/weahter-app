import { ReactNode } from "react";

export interface HightlightProps {
  title: string;
  value: number;
  unit: string;
  children?: ReactNode;
  size: "regular" | "extended";
}
