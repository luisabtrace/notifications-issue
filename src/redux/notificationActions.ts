import { SnackbarKey, SnackbarMessage } from "notistack";
import { NotificationOptions, ENQUEUE_NOTIFICATION, REMOVE_NOTIFICATION } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const enqueueNotification = createAction<{
  message: SnackbarMessage;
  options: NotificationOptions;
}>(ENQUEUE_NOTIFICATION);

export function enqueueInfoNotification(message: SnackbarMessage, options: NotificationOptions = {}) {
  return enqueueNotification({
    message,
    options: {
      ...options,
      variant: "info",
      autoHideDuration: options.autoHideDuration,
    },
  });
}

export const removeNotification = createAction<{
  key: SnackbarKey;
  message: SnackbarMessage;
}>(REMOVE_NOTIFICATION);
