import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
