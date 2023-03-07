import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './utils/redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutPage, Discover, Favorite, Profile } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		children: [
			{
				path: 'homepage',
				element: <App />,
			},
			{
				path: 'discover',
				element: <Discover />,
			},
			{
				path: 'favorite',
				element: <Favorite />,
			},
			{
				path: 'profile',
				element: <Profile />,
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
