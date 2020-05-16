import React from 'react';
import { IntlProvider } from 'react-intl';
// import { LocaleContext } from './LocaleContext';
import Translate from './components/translate';
import './App.css';

function App() {
  // const [locale] = React.useContext(LocaleContext);
  return (
    <IntlProvider locale="en" messages={{ en: [], nep: [] }}>
      <div className="App">
        <Translate />
      </div>
    </IntlProvider>
  );
}

export default App;
