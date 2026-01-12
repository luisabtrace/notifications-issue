import React from "react";
import useNotifications from "../hooks/useNotifications";
import { useDispatch } from "react-redux";
import { enqueueInfoNotification } from "../redux/notificationActions";

export const App = () => {
  useNotifications();

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(enqueueInfoNotification("Closing this notification will trigger the issue"));
      }}
    >
      Click me!
    </button>
  );
};
