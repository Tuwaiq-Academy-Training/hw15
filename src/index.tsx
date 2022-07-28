import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SettingPage } from './component/sittings';
import { ProfilePage } from './component/Profile';
import { NotfoundPage } from './component/Notfound';
import { Posts } from './component/Posts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
	 <BrowserRouter>
	 <Routes>
	  
	   <Route path="/" element={<Posts />} />
	   <Route path="/setting" element={<SettingPage />} />
	   <Route path="/profile" element={<ProfilePage />} />
	   <Route path="/*" element={<NotfoundPage/>} />

	   

	 </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();