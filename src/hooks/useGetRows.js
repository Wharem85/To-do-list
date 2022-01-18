import React, { useEffect, useState } from 'react'

const useGetRows = () => {
	const [rows, setRows] = useStete([]);

	useEffect(async () => {
		setRows()
	}, [])
};

export default useGetRows;
