import React from 'react';
import Box from '@mui/material/Box';
import '../assets/styles/Add.css';

const Add = ({handleSubmit}) => {
	return (
		<div className="content">
			<Box sx={{width: 600, maxWidth: '100%'}}>
				<form action="/" onSubmit={handleSubmit}>
					<input className="activity" id="asd" name="inputActivity" placeholder="Escribe tu actividad"/>
					<button type="submit">anadir</button>
				</form>
			</Box>
		</div>
	);
};

export default Add;
