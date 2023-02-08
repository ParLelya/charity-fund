import React from 'react';

interface IPets {
	name: string,
	age: string,
	info: string,
	id: number,
	url: string
}

const PetCard: React.FC = () => {

	const pets: IPets[] = [
		{ name: 'Пуфик', age: '3 года', info: 'Кастрирован и привит.', id: 1, url: 'https://sun9-west.userapi.com/sun9-15/s/v1/ig2/zdwy5oFxFtyc1y0v0hbFpg_7s39XnqVL15ZLEaK3_nBbYKNaK5Kgpd62qtXeJ4yheUqXJUYeT5_DbckOE-E9Zgrs.jpg?size=2560x1706&quality=95&type=album' },
		{ name: 'Бусинка', age: '2 года', info: 'Стерилизована и привита.', id: 2, url: 'https://sun9-west.userapi.com/sun9-54/s/v1/ig2/-uA8Nb-6XJ9_G39INzddKHsImSSMdczdbgCdAj8WdyHpGQBmNTHb3wdQZKcAfH9q8wZz6eYCG60cVjdRDaf1IBXg.jpg?size=2560x1706&quality=95&type=album' },
		{ name: 'Якоб', age: '11 месяцев', info: 'Кастрирован и привит.', id: 3, url: 'https://sun9-east.userapi.com/sun9-22/s/v1/ig2/FdGkeIV2FTFEDX3sdt4hY5vkSzIRZ-zxa2JnKAQpGf4eLGAgN5FgMEfh71kSAse7T8AxnsPJrzj-CsvSFok0GAWf.jpg?size=2560x1706&quality=95&type=album' },
		{ name: 'Рада', age: '11 месяцев', info: 'Стерилизована и привита.', id: 4, url: 'https://sun9-west.userapi.com/sun9-14/s/v1/ig2/x7BLkFqnJQN6qsPIamMA37xeJq2B0ZbY4PhPMggZhTLUL0RhwMcwA4OgnEp0P0LIR6QYJpupc27WI4HeskRt8-lp.jpg?size=2560x1706&quality=95&type=album' },
	]

	return (
		<div>
			{pets.map(pet => {
				return (
					<div className="col s12 m6 l3">
						<div key={pet.id} className="card pet">
							<div className="card-image">
								<img
									src={pet.url}
									alt='pet'
								/>
								<span className="card-title">{pet.name}, {pet.age}</span>
							</div>
							<div className="card-content">
								<p>{pet.info}</p>
							</div>
							<div className="card-action">
								<button className="waves-effect waves-light btn-small green lighten-2">Забрать домой</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
};

export default PetCard;
