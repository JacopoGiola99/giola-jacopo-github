import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './routes/login';
import Logout from './routes/logout';
import Utenti from './routes/utenti';
import Classi from './routes/classi';
import NotFound from './routes/notFound';
import Repositories from './routes/repositories';
import Details from './routes/details';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="utenti" element={<Utenti />} />
          <Route path="classi" element={<Classi />} />
          <Route path="repositories" element={<Repositories />} />
          <Route path='detail/:idRepo' element={<Details />} />
          <Route path="*" element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
