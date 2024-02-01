import React from 'react';
import  ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Test from './pages/Test';
import Banner from './components/banner';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Banner />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
          </Routes>
                </Router>
  </React.StrictMode>,
document.getElementById('root')
)
reportWebVitals();
