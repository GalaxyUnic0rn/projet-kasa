import Home from './pages/home/Home';
import NotFound from './pages/404/404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "*",
		element: <NotFound />
	},

]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;