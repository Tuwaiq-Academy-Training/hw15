import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

import './styles/my-profile.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostsPage } from './routes/posts';
import { HomePage } from './routes/home';
import { ProfilePage } from './routes/profile';
// import{Setting} from './routes/Setting'
// import {GgComponents,Gg404Page} from ''
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter>
 <Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/profile' element={<ProfilePage />} />
			<Route path ='/setting' element={<></>}/>
			{/* <Route path='/*' element={<GgComponents.Gg404Page />} /> */}
		</Routes>
  </BrowserRouter>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
