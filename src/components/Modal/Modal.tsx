import React from 'react'
import './Modal.css'

interface IModalProps {
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>,
	children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? "my-modal opened" : "my-modal"}
			onClick={() => setActive(false)}
		>
			<div className='modal__content' onClick={e => { e.stopPropagation() }}>
				{children}
			</div>
		</div>
	)
}

export default Modal