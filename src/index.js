import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  
  