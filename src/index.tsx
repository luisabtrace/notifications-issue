import React from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./components/Root";
import { store } from "./redux/store";

const renderApp = () =>
  createRoot(document.getElementById("root")!).render(<Root store={store} />);

document.addEventListener("DOMContentLoaded", async () => {
  renderApp();
});
