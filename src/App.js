import React from 'react';
import { IntlProvider } from 'react-intl';
import { LocaleContext } from './LocaleContext';
import Translate from './components/translate';
import en from './translations/en';
import polish from './translations/polish';
import './App.css';

const messages = {
  en,
  polish
};

function App() {
  const [locale] = React.useContext(LocaleContext);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <Translate />
      </div>
    </IntlProvider>
  );
}

export default App;
