import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wrapper from './components/Wrapper';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App date={Date.now()}/>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
