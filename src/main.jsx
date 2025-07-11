import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // باید این را اضافه کنید
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* این قسمت را به درستی اضافه کنید */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);