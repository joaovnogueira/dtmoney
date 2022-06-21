import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }  from './App';
import { Server } from 'miragejs'
import { createServer } from 'http';

createServer({
  routes(){
    this.namespace ='api';
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

