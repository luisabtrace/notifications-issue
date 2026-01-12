import { createReducer } from "@reduxjs/toolkit";
import { NotificationState } from "./types";
import { enqueueNotification, removeNotification } from "./notificationActions";
import { createDraft } from "immer";

const initialValue: NotificationState = {
  notifications: [],
};

export const notificationReducer = createReducer(initialValue, (builder) => {
  builder
    .addCase(enqueueNotification, (state, action) => {
      state.notifications = [
        ...state.notifications,
        createDraft({
          message: action.payload.message,
          options: action.payload.options,
        }),
      ];
    })
    .addCase(removeNotification, (state, action) => {
      let notifications = state.notifications;

      const index = state.notifications.findIndex((notification) => {
        // Accessing .options causes the crash
        console.log(notification.options);
        return notification.message === action.payload.message;
      });

      if (index > -1) {
        notifications = [...state.notifications];
        notifications.splice(index, 1);
      }

      state.notifications = notifications;
    });
});
