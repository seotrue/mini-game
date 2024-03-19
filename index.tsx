import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './src/styles/index.scss';
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
