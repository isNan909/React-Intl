import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { LocaleContext } from '../LocaleContext';

const messages = defineMessages({
  heading: {
    id: 'Heading',
    defaultMessage: 'Welcome to our react application',
  },
  subHeading: {
    id: 'Subheading',
    defaultMessage: 'React internationalization demo',
  },
});

const Translate = (props) => {
  const [locale, setLocale] = React.useContext(LocaleContext);
  const nextLocale = locale === 'en' ? 'fr' : 'en';
  return (
    <>
      <h1>
        <FormattedMessage {...messages.heading} />
      </h1>
      <h3>
        <FormattedMessage {...messages.subHeading} />
      </h3>
      <button onClick={() => setLocale(nextLocale)}>
        Change language to {nextLocale}
      </button>
    </>
  );
};

export default Translate;
