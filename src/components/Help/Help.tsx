import React from 'react';

const Help: React.FC = () => {
	return (
		<div id='help' className="row">
			<h2 className="header">Как можно помочь?</h2>
			<div className="col s12 m4">
				<div >
					<div className="card">
						<div className="card-stacked">
							<div className="card-content">
								<p>
									<h5>Нам очень нужна помощь каждого единомышленника!</h5><br />
									Нужна финансовая поддержка, нужны специалисты
									в области PR и SMM, дизайна и полиграфии, нужна физическая помощь, помощь стройматериалами,
									инвентарем, оборудованием и многое другое!<br />
									<br />
									Также можно переводить средства на карту сбербанка 5336690275562553, оформлена на Дарью Вадимовну В.
								</p>
							</div>
							<div className="card-action">
								<a href="/">Помочь рублём</a>
								<a href="https://vk.com/topic-200001862_46581666">Финансовый отчёт</a>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div className="col s12 m8">
				<div className="card-panel green lighten-4">
					<h5 className="header">Нужды приюта:</h5>
					<p className="black-text" style={{textAlign: 'left'}}>
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> корма для кошек и котят, особенно веткорма: гастро, бэби и киттен, гепатик, ренал<br />
						(т.е. спецкорма при лечебных диетах, болезнях печени, почек, пищеварительных расстройствах);<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> противопаразитарные и глистогонные препараты для кошек и котят (селафорт, стронгхолд, дронтал, празител);<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> средства для дезинфекции помещения и оборудования (экоцид, хлорка, лайна, антисептики для обработки);<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> швабры, тряпки, влажные салфетки, бумажные полотенца, перчатки, пульверизаторы, моющие средства;<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> лампы Т8 люминесцентные или светодиодные, кольцевая светодиодная лампа;<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> мебель (стол, стулья, шкаф, стеллаж и т.п.);<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> лотки (только новые), одноразовые пеленки;<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> миски для корма и воды, особенно больших размеров (750-1000 мл), автопоилки;<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> клетки, котоловки, переноски;<br />
						<i className="material-icons" style={{ fontSize: '1rem' }}>volunteer_activism</i> лежанки, пледы, когтеточки, домики, игрушки и пр.<br />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Help;