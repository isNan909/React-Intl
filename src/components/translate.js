import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

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
  return (
    <>
      <h1>
        <FormattedMessage {...messages.heading} />
      </h1>
      <h3>
        <FormattedMessage {...messages.subHeading} />
      </h3>
    </>
  );
};

export default Translate;
