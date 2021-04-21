import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_fr from "./Translations/fr/common.json";
import common_en from "./Translations/en/common.json";
import common_es from "./Translations/es/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
    fr: {
      common: common_fr,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
