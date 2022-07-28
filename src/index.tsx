import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import {  HomePage } from './components/Home';
import { NotfoundPage } from './components/Notfound';
import { ProfilePage } from './components/Profile';
import { SetingPage } from './components/Seting';

import reportWebVitals from './reportWebVitals';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
	 <BrowserRouter>
	 <Routes>
	  
	   <Route path="/" element={<HomePage />} />
	   <Route path="/seting" element={<SetingPage />} />
	   <Route path="/profile" element={<ProfilePage />} />
	   <Route path="/*" element={<NotfoundPage/>} />

	   

	 </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
