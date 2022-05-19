import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const navLanguage = navigator.language.split("-")[0];
const localeMsg = navLanguage === "es" ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={navLanguage} messages={localeMsg}>
    <JobsList language={navLanguage} />
  </IntlProvider>,
  document.getElementById("root")
);
