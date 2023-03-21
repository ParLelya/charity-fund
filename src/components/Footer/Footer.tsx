import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="page-footer green lighten-2">
			<div className="container">
				<div className="row">
					<div className="col l6 s12">
						<h5 className="black-text">
							Автономная некоммерческая организация Социальный центр спасения
							и реабилитации животных «Альтера Вита» ("Другая жизнь")
						</h5>
						<p className="black-text">
							ИНН 4705088146 КПП 470501001<br />
							Северо-западный банк ПАО Сбербанк<br />
							Р/с № 40703810955000004152<br />
							К/с № 30101810500000000653<br />
							БИК 044030653<br />
							Назначение платежа:<br />
							"Пожертвование на уставную деятельность".
						</p>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5 className="black-text">Наши соцсети</h5>
						<ul>
							<li>
								<a
									className="black-text"
									href="https://vk.com/centralteravita"
									style={{ textDecoration: 'underline' }}
								>VK
								</a>
							</li>
							<li>
								<a
									className="black-text"
									href="https://www.instagram.com/altera_vita_vyritsa"
									style={{ textDecoration: 'underline' }}
								>Instagram*
								</a>
							</li>
							<li>
								<a
									className="black-text"
									href="https://www.tiktok.com/@altera_vita"
									style={{ textDecoration: 'underline' }}
								>TikTok
								</a>
							</li>
						</ul>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5 className="black-text">Контакты</h5>
						<ul>
							<li className="black-text">
							<i className="material-icons" style={{ fontSize: '1.3rem', transform: 'translateY(18%)' }}>location_on</i> Ленинградская область, Вырица
							</li>
							<li className="black-text">
								<span>Дарья Варламова
									<a className="waves-effect waves-green btn-flat" href='tel:+79643804093'>+7(964)380-40-93</a>
								</span>
							</li>
							<li className="black-text">
								<span>Марина Егорова
									<a className="waves-effect waves-green btn-flat" href='tel:+79818745020'>+7(981)874-50-20</a>
								</span>
							</li>
							<li className="black-text">
								<span>Татьяна Машорина
									<a className="waves-effect waves-green btn-flat" href='tel:+79215977500'>+7(921)597-75-00</a>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container black-text">
					© 2023 Made by Olga Kupriyanova
					<p className="black-text right">* - запрещен в РФ</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
