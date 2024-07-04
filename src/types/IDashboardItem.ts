import { ReactNode } from "react";

export interface IDashboardItem {
  text: string;
  link: string;
  icon: ReactNode;
  access?: string;
}
