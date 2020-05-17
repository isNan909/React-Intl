import React, { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';
import './App.css';

const message = {
  en: {
    heading: 'Welcome to our react application',
    subheading: 'Einfache Internationalisierung in Aktion',
    title: 'lets learn a simple way in {channelName}',
  },
  es: {
    heading: 'Willkommen zu unserer Reaktionsanwendung',
    subheading: 'Einfache Internationalisierung in Aktion',
    title: 'Lass uns einen einfachen Weg lernen {channelName}',
  },
};

function App(props) {
  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} defaultValue={locale}>
        {['en', 'es'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={message[locale]}>
        <p>
          <FormattedMessage
            id="heading"
            defaultMessage="some default one"
            values={{ locale }}
          />
          <br />
          <FormattedMessage id="subheading" defaultMessage="some default one" />
        </p>
        <p>
          <FormattedMessage
            id="title"
            defaultMessage="lets learn a simple way in {channelName}"
            values={{ channelName: 'forThoseWhoCode' }}
          />
        </p>
        <p>
          <FormattedDate
            value={props.date}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </p>
      </IntlProvider>
    </>
  );
}

export default App;
