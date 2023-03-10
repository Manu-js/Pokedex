import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>
);
