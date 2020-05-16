import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './App.css';

const message = {
  en: {
    heading: 'Welcome to our react application',
    subheading: 'Your current launguage is {name}',
  },
  polish: {
    heading: 'Witamy w naszej aplikacji react',
    subheading: 'Twój obecny launguage jest {name}',
  },
};

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
