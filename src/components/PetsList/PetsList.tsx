import React from 'react';
import PetCard from './PetCard/PetCard';



const PetsList: React.FC = () => {
	

	return (
		<div id='pets' className="row">
			<h2 className="header">Наши подопечные</h2>
			<PetCard/>
		</div>
	);
};

export default PetsList;
