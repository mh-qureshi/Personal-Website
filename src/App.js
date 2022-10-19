import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './Pages/about';
import project from './Pages/Projects';
import Services from './pages/services';
import Blogs from './pages/blogs';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/Projects' component={project} />
		<Route path='/services' component={Services} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/contact' component={Contact} />

	</Routes>
	</Router>
);
}

export default App;
