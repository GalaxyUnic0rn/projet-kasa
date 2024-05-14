import Home from './pages/home/Home';
import Apartment from './pages/apartment/Apartment';
import NotFound from './pages/404/404';
import Header from './components/header/Header';
import About from './pages/about/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';


const App = () => (
	<Router basename="/projet-kasa">
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/accomodation/:id' element={<Apartment />} />
			<Route path='/about' element={<About />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
		<Footer />
	</Router>
)

export default App;
