import React, { useState } from 'react'

const initialState = {
	row: [],
}

const useGetRows = () => {
	const [state, setState] = useState(initialState)

	const removeRows = (payload) => {
		setState({
			...state,
			row: state.row.filter(items => items.id != payload.id),
		})
	}

	return {
		state,
		removeRows
	};
};

export default useGetRows;
