import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="page-footer green lighten-2">
			<div className="container ">
				<div className="row">
					<div className="col l6 s12">
						<h5 className="black-text">Автономная некоммерческая организация Социальный центр спасения и реабилитации животных «Альтера Вита» ("Другая жизнь")</h5>
						<p className="black-text">
							ИНН 4705088146 КПП 470501001<br />
							р/с 40703810955000004152 в Северо-западном банке ПАО Сбербанк<br />
							к/с 30101810500000000653<br />
							БИК 044030653<br />
							При переводе ПРОСЬБА указывать назначение платежа:<br />
							"Пожертвование на уставную деятельность".
						</p>
					</div>
					<div className="col l4 offset-l2 s12">
						<h6 className="black-text">Мы в соцсетях:</h6>
						<ul>
							<li>
								<a
									className="black-text"
									href="https://vk.com/centralteravita"
								>VK
								</a>
							</li>
							<li>
								<a
									className="black-text"
									href="https://www.instagram.com/altera_vita_vyritsa"
								>Instagram*
								</a>
							</li>
							<li>
								<a
									className="black-text"
									href="https://www.tiktok.com/@altera_vita"
								>TikTok
								</a>
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
