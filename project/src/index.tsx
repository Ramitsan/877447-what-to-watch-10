import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  CARDS_COUNT: 20,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardCount={Setting.CARDS_COUNT}/>
  </React.StrictMode>,
);
