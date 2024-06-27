"use client";

import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import lightTheme from "../theme/theme";

export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
