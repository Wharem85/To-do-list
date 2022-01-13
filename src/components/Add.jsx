import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmojiPicker from 'emoji-picker-react';
import Picker from 'emoji-picker-react';
import InputEmoji from "react-input-emoji";
import '../assets/styles/Add.css';

const Add = () => {
	const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

	return (
		<div className="content">
			<Box
      	sx={{
        	width: 600,
        	maxWidth: '100%',
      	}}
    	>
				<InputEmoji
					className="activity"
					id="inputActivity"
      		value={text}
      		onChange={setText}
      		cleanOnEnter
      		onEnter={handleOnEnter}
      		placeholder="Escribe tu actividad"
    		/>
    	</Box>
		</div>
	);
};

export default Add;
