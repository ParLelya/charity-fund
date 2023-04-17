import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import About from './components/AboutFund';
import PetsList from './components/PetsList';
import News from './components/News';
import Help from './components/Help';

const App: React.FC = () => {
	return (
		<div className="App">
			<Navbar />
			<About />
			<PetsList />
			<Help />
			<News />
			<Footer />
		</div>
	);
}

export default App;
