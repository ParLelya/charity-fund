import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/AboutFund/AboutFund';
import PetsList from './components/PetsList/PetsList';
import News from './components/News/News';
import Help from './components/Help/Help';

function App() {
	return (
		<div className="App">
			<Navbar/>
			<About />
			<Help />
			<PetsList />
			<News />
			<Footer />
		</div>
	);
}

export default App;
