import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Help: React.FC = () => {
	const [modalActive, setModalActive] = useState(false)

	return (
		<div id='help' className="row">
			<h2 className="header">Как можно помочь?</h2>

			<div className="col s12 m8">
				<div className="card-panel green lighten-4">
					<h5 className="header">Нужды приюта:</h5>
					<p className="black-text left-align">
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

			<div className="col s12 m4">
				<div >
					<div className="card">
						<div className="card-stacked">
							<div className="card-content">
								<h5>Нам очень нужна помощь каждого единомышленника!</h5>
								<p>
									Нужна финансовая поддержка, нужны специалисты
									в области PR и SMM, дизайна и полиграфии, нужна физическая помощь, помощь стройматериалами,
									инвентарем, оборудованием и многое другое!<br />
									<br />
									Также можно переводить средства на карту сбербанка 5336690275562553, оформлена на Дарью Вадимовну В.
								</p>
							</div>
							<div className="card-action">
								<button
									className="waves-effect waves-light btn-small green lighten-2"
									onClick={() => setModalActive(true)}
									style={{ margin: '5px 20px' }}
								>
									Помочь рублём
								</button>
								<a href="https://vk.com/topic-200001862_46581666" style={{ margin: '5px 20px' }}>Финансовый отчёт</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>

				<form action="#">
					Выберите сумму пожертвования:<br />
					<p><label>
						<input type='radio' name='donation' className='btn-small green lighten-2' />
						<span>100 ₽</span>
					</label></p>
					<p><label>
						<input type='radio' name='donation' className='btn-small green lighten-2' />
						<span>500 ₽</span>
					</label></p>
					<p><label>
						<input type='radio' name='donation' className='btn-small green lighten-2' />
						<span>1000 ₽</span>
					</label></p>
					<div className="row">
						<div className="col s12">
							Ввести другую сумму:
							<div className="input-field inline" style={{ marginLeft: '20px' }}>
								<input value="350 ₽" id="donat" type="text" className="validate" />
							</div>
						</div>
					</div>
					<div className="switch" style={{ marginBottom: '20px' }}>
						<span>Сделать пожертвование регулярным?</span>
						<label style={{ marginLeft: '10px' }}>
							Нет
							<input type="checkbox" />
							<span className="lever"></span>
							Да
						</label>
					</div>

					<label> <i className="material-icons prefix" style={{ transform: 'translateY(30%)' }} >account_circle</i>
						Ваши фамилия и имя
						<input type='text' placeholder='Введите текст' required className="validate" />
					</label>

					<label> <i className="material-icons prefix" style={{ transform: 'translateY(30%)' }} >email</i>
						Ваш емейл
						<input type='email' placeholder='Введите электронную почту' required className="validate" />
					</label>

					<button className='btn-small green lighten-2' type="submit" name="action" onSubmit={() => setModalActive(false)}>
						Отправить  <i className="material-icons right" style={{ color: 'white' }}>send</i>
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default Help;