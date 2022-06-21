import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }  from './App';
import { Server } from 'miragejs'
import { createServer } from 'http';
import { resourceLimits } from 'worker_threads';

createServer(){
  resourceLimits()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

