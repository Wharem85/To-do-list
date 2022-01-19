import React, {useState, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from '../assets/icons/delete.png';
import useGetRows from '../hooks/useGetRows';
import AppContext from '../context/AppContext';
import '../assets/styles/Table.css';

const TableActivity = ({rows, row}) => {
	const { removeRows } = useContext(AppContext);
	const handleRemove = row => {
		removeRows(row);
	}
	const [info] = useState('');

	return (
		<div className="table-responsive">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center"><p className="title">Mis actividades</p></TableCell>
							<TableCell></TableCell>
							<TableCell align="center"><p className="title">Delete</p></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, idx) => (
							<TableRow
								row={row}
								key={row.activity.idx}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								value={info}
							>
								<TableCell align="center" component="th" scope="row">
									<p className="date">{row.activity}</p>
								</TableCell>
								<TableCell></TableCell>
								<TableCell align="center">
									<img src={Delete} className="deleteButton" onClick={() => handleRemove(row)} alt="delete" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
};

export default TableActivity;
