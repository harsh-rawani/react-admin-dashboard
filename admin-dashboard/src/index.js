import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <BrowserRouter>
        <GoogleOAuthProvider
            clientId="468474788357-3d8t557tmkjcej19rbr8rfk16qq6up58.apps.googleusercontent.com"
            domain='http://localhost:3000'
            authorizationParams={{
              redirect_uri: '/dashboard',
            }}
            >
          <App />
        </GoogleOAuthProvider>
        </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
