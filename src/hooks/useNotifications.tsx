import { SnackbarKey, SnackbarMessage, SnackbarOrigin, useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../redux/notificationActions";
import { useTypedSelector } from "../redux/store";

export const SNACK_BAR_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: "bottom",
  horizontal: "center",
};

export default () => {
  const dispatch = useDispatch();
  const notifications = useTypedSelector((state) => state.notification.notifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [displayed, setDisplayed] = useState(new Map<SnackbarKey, SnackbarMessage>());

  function onNotificationDisplayed(key: SnackbarKey, message: SnackbarMessage) {
    // keep track of snackbars that we've displayed
    setDisplayed(displayed.set(key, message));
  }

  function onNotificationHidden(key: SnackbarKey, message: SnackbarMessage) {
    // Remove this snackbar from the redux store
    dispatch(removeNotification({ key, message }));
    displayed.delete(key);
    setDisplayed(displayed);
  }

  useEffect(() => {
    for (const { message, options } of notifications) {
      enqueueSnackbar(message, {
        ...options,
        variant: options.variant,
        key: options.key,
        anchorOrigin: SNACK_BAR_ANCHOR_ORIGIN,
        action: (key) => {
          const close = () => closeSnackbar(key);

          return (
            <button title="Dismiss" onClick={close}>
              Close
            </button>
          );
        },
        preventDuplicate: true,
        onEnter: (_node, _isAppearing, key) => {
          onNotificationDisplayed(key, message);
        },
        onExited: (_node, exitedKey) => {
          onNotificationHidden(exitedKey, message);
        },
      });
    }
  }, [notifications, closeSnackbar, enqueueSnackbar]);
};
