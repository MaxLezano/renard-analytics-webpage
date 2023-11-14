import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Team from './pages/team';
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import "./index.css"

import global_es from './assets/languages/es/global.json';
import global_en from './assets/languages/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<App />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
