import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary'; // Step 2: Import ErrorBoundary

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Add React.StrictMode for highlighting potential problems */}
    <ErrorBoundary> {/* Step 3: Wrap App with ErrorBoundary */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
