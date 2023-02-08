import React from 'react'
import './SideNav.css'

interface ISideNavProps {
	header: string,
	menu: JSX.Element[],
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const SideNav: React.FC<ISideNavProps> = ({ header, menu, active, setActive }) => {
	return (
		<div
			id="slide-out"
			className={active ? 'sidenav green lighten-4 active' : 'sidenav green lighten-4'}
			onClick={() => setActive(false)}
		>
			<ul>
				<li>
					<div className="user-view green lighten-2">
						<div className="header black-text" style={{ lineHeight: '1.5', paddingBottom: '20px' }}>
							{header}
						</div>
					</div>
				</li>
				<li>
					<ul className='sidenav__btn'>
						{menu}
					</ul>
				</li>
			</ul>
		</div >
	)
}

export default SideNav