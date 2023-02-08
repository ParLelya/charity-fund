import React from 'react';

const Help: React.FC = () => {
	return (
		<div id='help' className="col s12 m6">
				<h2 className="header">Как можно помочь?</h2>
				<div className="card">
					<div className="card-stacked">
						<div className="card-content">
							<p>
								Нам очень нужна помощь каждого единомышленника! Нужна финансовая поддержка, нужны специалисты 
								в области PR и SMM, дизайна и полиграфии, нужна физическая помощь, помощь стройматериалами, 
								инвентарем, оборудованием и многое другое!<br />
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
	);
};

export default Help;