import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddTaskIcon from '@mui/icons-material/AddTask';
import BlockIcon from '@mui/icons-material/Block';
import '../assets/styles/Navigation.css';

const Navigation = () => {
	const [value, setValue] = React.useState(0);
	return (
		<div className="container-navigation">
			<Box sx={{ width: 500 }}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction label="Hechos" icon={<AddTaskIcon />} />
					<BottomNavigationAction label="Pendientes" icon={<AccessTimeFilledIcon />} />
					<BottomNavigationAction label="Cancelados" icon={<BlockIcon />} />
				</BottomNavigation>
			</Box>
		</div>
	);
};

export default Navigation;
