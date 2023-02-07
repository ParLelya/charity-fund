import React from 'react';

const Help: React.FC = () => {
	return (
		<div id='help'>
			<div className="col s12 m7">
				<h2 className="header">Как можно помочь?</h2>
				<div className="card horizontal">
					<div className="card-image">
						<img src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/QeUHCotLrWmVxO4oN0ugIy6XCBAlCxpeUD50cIFr0gIxlYA9qlD_BN1UzvuAMUwY0ywdDrnp8T_Qqt9va-1AV9x9.jpg?size=2560x1706&quality=95&type=album" alt='' />
					</div>
					<div className="card-stacked">
						<div className="card-content">
							<p>
								Нам очень нужна помощь каждого единомышленника! Нужна финансовая поддержка, нужны специалисты 
								в области PR и SMM, дизайна и полиграфии, нужна физическая помощь, помощь стройматериалами, 
								инвентарем, оборудованием и многое другое!
								Также можно переводить средства на карту сбербанка 5336690275562553, оформлена на Дарью Вадимовну В. 
							</p>
						</div>
						<div className="card-action">
							<a href="/">Помочь финансами</a>
							<a href="https://vk.com/topic-200001862_46589641">Нужды приюта</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Help;