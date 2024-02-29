import Home from './pages/home/Home';
import Apartment from './pages/apartment/Apartment';
import NotFound from './pages/404/404';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />
// 	},
// 	{
// 		path: "*",
// 		element: <NotFound />
// 	},

// ]);

// function App() {
// 	return (
// 		<>
// 			<RouterProvider router={router}>
// 				<Header />
// 			</RouterProvider>
// 		</>
// 	);
// }

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<NotFound />} />
			<Route path='/accomodation/:id' element={<Apartment />} />
		</Routes>
		<Footer />
	</Router>
)

export default App;
