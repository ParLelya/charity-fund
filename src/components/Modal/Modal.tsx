import React from 'react'
import './Modal.css'

interface IModalProps {
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>,
	children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ active, setActive }) => {
	return (
		<div
			className={active ? "my-modal opened" : "my-modal"}
			onClick={() => setActive(false)}
		>
			<div className='modal__content' onClick={e => { e.stopPropagation() }}>
				<form action="#">
					Выберите сумму пожертвования:<br />
					<p><label>
						<input
							type='radio'
							name='donation'
							className='btn-small green lighten-2'
						/>
						<span>100 ₽</span>
					</label></p>
					<p><label>
						<input
							type='radio'
							name='donation'
							className='btn-small green lighten-2'
						/>
						<span>500 ₽</span>
					</label></p>
					<p><label>
						<input
							type='radio'
							name='donation'
							className='btn-small green lighten-2'
						/>
						<span>1000 ₽</span>
					</label></p>
					<div className="row">
						<div className="col s12">
							Ввести другую сумму:
							<div className="input-field inline" style={{ marginLeft: '20px' }}>
								<input
									placeholder="350 ₽"
									id="donat"
									type="text"
									className="validate" />
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
						<input
							type='text'
							placeholder='Введите текст'
							required
							className="validate" />
					</label>

					<label> <i className="material-icons prefix" style={{ transform: 'translateY(30%)' }} >email</i>
						Ваш емейл
						<input
							type='email'
							placeholder='Введите электронную почту'
							required
							className="validate" />
					</label>

					<button
						className='btn-small green lighten-2'
						type="submit"
						name="action"
						onSubmit={() => setActive(false)}
					>
						Отправить  <i className="material-icons right" style={{ color: 'white' }}>send</i>
					</button>
				</form>
			</div>
		</div>
	)
}

export default Modal