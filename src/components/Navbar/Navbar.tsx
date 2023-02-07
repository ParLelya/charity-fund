import React from 'react';

const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper green lighten-2">
				<a href="/" className="brand-logo center">
					<img
						src='logo.png'
						alt='logo'
						style={{ width: '200px', transform: 'translateY(-15%)' }}
					></img>
				</a>
				<ul className="left hide-on-med-and-down black-text">
					<li><a href="#about" className="black-text">О фонде</a></li>
					<li><a href="#pets" className="black-text">Подопечные</a></li>
					<li><a href="#projects" className="black-text">Проекты</a></li>
					<li><a href="#help" className="black-text">Помочь</a></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

