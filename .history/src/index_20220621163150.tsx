import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }  from './App';
import { Server } from 'miragejs'
import { createServer } from 'http';

createServer(){
  resourceLimits
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

