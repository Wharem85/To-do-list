import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputEmoji from 'react-input-emoji';
import '../assets/styles/Add.css';

const Add = ({handleSubmit, handleOnEnter}) => {
	const [text, setText] = useState('');

	return (
		<div className="content">
			<Box sx={{width: 700, maxWidth: '100%'}}>
					<InputEmoji value={text} onChange={setText} onEnter={handleOnEnter} name="inputActivity" placeholder="Escribe tu actividad"/>
			</Box>
		</div>
	);
};

export default Add;
