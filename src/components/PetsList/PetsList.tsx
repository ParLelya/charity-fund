import React from 'react';
import PetCard from './PetCard/PetCard';

const PetsList: React.FC = () => {
	return (
		<div id='pets' className="row">
			<h2 className="header">Наши подопечные</h2>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
		</div>
	);
};

export default PetsList;
