import React from 'react';

const PetCard: React.FC = () => {
	return (
			<div className="col s12 m4 l3">
				<div className="card pet">
					<div className="card-image">
						<img 
						src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/I_yGl0rKMAXSMut3y8DIKJP1nbu2tjTNdaLveZ-AdYaUBIjAGdi2TYb8PqRQh09NJcF6Q6mYENYA4lNT0uqPl96o.jpg?size=2560x1707&quality=95&type=album" 
						alt='cat'
						/>
						<span className="card-title">Кличка</span>
					</div>
					<div className="card-content">
						<p>Возраст</p>
					</div>
					<div className="card-action">
						<a href="/">Подробнее</a>
					</div>
				</div>
			</div>
	);
};

export default PetCard;
