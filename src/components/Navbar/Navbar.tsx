import React, {useState} from 'react';
import SideNav from './SideNav/SideNav';
import IMenuItem from '../../types/interface';

const Navbar: React.FC = () => {
	const [menuActive, setMenuActive] = useState(false)

	const header: string = 'Социальный центр спасения и реабилитации животных «Альтера Вита»'

	const items: IMenuItem[] = [
		{ value: 'О фонде', href: '#about', id: 1 },
		{ value: 'Помочь', href: '#help', id: 2 },
		{ value: 'Подопечные', href: '#pets', id: 3 },
		{ value: 'Новости', href: '#news', id: 4 },
	]

	const menuButtons = items.map(item => {
		return (
		<li>
			<a key={item.href} href={item.href} className="black-text waves-effect">{item.value}</a>
		</li>
		)
	})

	return (
		<nav>
			<div className="nav-wrapper green lighten-2">
				<a 
				href='#!'
				data-target="mobile-demo" 
				className="sidenav-trigger"
				onClick={() => setMenuActive(!menuActive)}
				>
					<i className="material-icons black-text">menu</i>
				</a>
				<SideNav 
				header={header} 
				menu={menuButtons} 
				active={menuActive} 
				setActive={setMenuActive}
				/>
				<span className="left black-text hide-on-med-and-down" style={{ marginLeft: '10px', fontWeight: '600' }}>
					{header}
				</span>

				<a href='#!' className="brand-logo" style={{ left: '47%', top: '-20%' }} >
					<img
						src='logo.png'
						alt='logo'
						style={{ width: '120px' }}
					/>
				</a>

				<ul id="nav-mobile" className="right hide-on-med-and-down" style={{ marginRight: '10px' }}>
					{menuButtons}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

