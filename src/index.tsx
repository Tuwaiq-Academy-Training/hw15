import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PostsPage from './routes/posts';
import { ProfilePage } from './routes/profile';
import './styles/index.css';
import'./styles/profilestyle.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<PostsPage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/profile' element={<ProfilePage />} />
		<Route 
		path='*'
		element={
			<main style={{padding: '1rem'}}>
				<p>Page Not Found</p>

			</main>
		}
		/>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
