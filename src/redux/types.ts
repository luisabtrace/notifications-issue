import { OptionsObject, SnackbarMessage } from "notistack";

export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export interface Notification {
  message: SnackbarMessage;
  options: NotificationOptions;
}

export type NotificationOptions = OptionsObject & {
  shouldPersistAfterClickingAway?: boolean;
  /**
   * Ensures that only one notification per key is allowed in the notification array at any time.
   * If a new notification with a key matching an existing notification is dispatched,
   * the existing notification will be kept, and the new notification will be disregarded.
   */
  onePerKey?: boolean;
};

export type NotificationState = {
  notifications: Notification[];
};
