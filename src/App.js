import React, { useContext } from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Context } from './components/Wrapper';

function App(props) {
  const context = useContext(Context);

  return (
    <>
      <div>
        <select name ="lang" value={context.locale} onChange={context.selectLang}>
          <option value="en-US" selected>English</option>
          <option value="es-MX">Spanish</option>
        </select>
      </div>
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
