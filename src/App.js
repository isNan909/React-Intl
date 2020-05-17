import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

function App(props) {
  return (
    <>
      <p>
        <FormattedMessage
          id="app.content"
          defaultMessage="default message seeing"
        />
      </p>
      <p>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="some new text"
          values={{ channelName: 'newname' }}
        />
      </p>
      <p>
        <FormattedMessage
          id="app.header"
          defaultMessage="Edit <code>{fileName}</code> js and save to reload."
          values={{
            fileName: 'src/App.js',
            code: (text) => <code>{text}</code>,
          }}
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
    </>
  );
}

export default App;
