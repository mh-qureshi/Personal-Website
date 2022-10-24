import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavbarElements';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from '..src/pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Blogs from './pages/blog';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/services' component={Services} />
		<Route path='/projects' component={Projects} />
		<Route path='/contact' component={Contact} />
		<Route path='/blog' component={Blogs} />
	</Routes>
	</Router>
);
}

export default App;
