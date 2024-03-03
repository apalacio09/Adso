import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function MyApp() {
    return <h1>Hello, world!</h1>;
  }

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);