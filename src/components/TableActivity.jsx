import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from '../assets/icons/delete.png';
import '../assets/styles/Table.css';



const TableActivity = ({rows}) => {
	const [info] = useState('');

	return (
		<div className="table-responsive">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center" className="title">Mis actividades</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key="{row.activity.id}"
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								value={info}
							>
								<TableCell align="center" component="th" scope="row">
									{row.activity}
								</TableCell>
								<TableCell align="center"><img src={Delete}></img></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
};

export default TableActivity;
