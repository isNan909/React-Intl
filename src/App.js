import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import message from './data';
import './App.css';


function App() {
  const [name, setName] = useState('en');
  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setName(e.target.value);
    setLocale(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} defaultValue={locale}>
        {['en', 'polish'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={message[locale]}>
        <div>
          <FormattedMessage id="heading" values={{ name }} />
          <br/>
          <FormattedMessage id="subheading" values={{ name }} />
        </div>
      </IntlProvider>
    </>
  );
}

export default App;
