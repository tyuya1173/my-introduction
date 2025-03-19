import { hydrateRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, <App />);
}