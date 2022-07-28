import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/home';
import { ProfilePage } from './routes/profile';
import {NotfoundPage} from './routes/notfount';
import { PostsPage } from './routes/posts';
import {SettingPage} from './routes/setting';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/*' element={<NotfoundPage />} />
      <Route path='/setting' element={<SettingPage/>}/>
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

