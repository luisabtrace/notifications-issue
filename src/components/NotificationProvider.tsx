import { SnackbarProvider } from "notistack";
import React, { ReactNode } from "react";

export function NotificationProvider({ children }: { children: ReactNode }) {
  const notistackRef = React.createRef<SnackbarProvider>();

  return <SnackbarProvider ref={notistackRef}>{children}</SnackbarProvider>;
}
