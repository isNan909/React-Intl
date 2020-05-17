import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from '../languages/es-MX.json';
import English from '../languages/en-US.json';

export const Context = React.createContext();
const local = navigator.launguage;

let lang;
if (local === 'en-US') {
  lang = English;
} else {
  lang = Spanish;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLang(e) {
    const currentLocale = e.target.value;
    setLocale(currentLocale);
    if (currentLocale === 'es-MX') {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={local}>
        {props.childern}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
