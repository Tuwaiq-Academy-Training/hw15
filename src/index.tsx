import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//
import reportWebVitals from './reportWebVitals';
// import { HomePage } from './routes/home';
import GgComponents from './routes/NotFound';
import { HomePage } from './routes/posts';
import { ProfilePage } from './routes/profile';
import { SendPage } from './routes/send';
import { AddaccPage } from './routes/add-acc';
import { FindPage } from './routes/find-pe';
import { FavPage } from './routes/favorite';
import { PersonalPage } from './routes/personal';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			{/* <Route path='/' element={<HomePage />} /> */}
			<Route path='/' element={<HomePage />} />
			<Route path='/home' element={<ProfilePage />} />
			<Route path='/send' element={<SendPage />} />
			<Route path='/add_post' element={<AddaccPage />} />
			<Route path='/find_pepole' element={<FindPage />} />
			<Route path='/favorite' element={<FavPage />} />
			<Route path='/personal' element={<PersonalPage />} />

			FavPage
			<Route path='/*' element={<GgComponents.Gg404Page />} />
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
