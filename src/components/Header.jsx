import React from 'react';
import '../assets/styles/Header.css';

const Header = () => {
	return (
		<div className="container">
			<div className="header">
				<p className="title">To-Do List</p>
			</div>
			<div className="inf">
				<p className="uso">Escribe las actividades de su rutina diaria aqui</p>
			</div>
		</div>
	);
};

export default Header;
