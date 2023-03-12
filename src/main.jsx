import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { Games, LayoutPage, Movies, Profile, Shows } from './pages';
import { store } from './utils/redux/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},

	{
		path: '/home',
		element: <LayoutPage />,
		children: [
			{
				path: 'games',
				element: <Games />,
			},

			{
				path: 'profile',
				element: <Profile />,
			},

			{
				path: 'movies',
				element: <Movies />,
			},
			{
				path: 'shows',
				element: <Shows />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
