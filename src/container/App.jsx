import React, {useState} from 'react'
import Header from '../components/Header';
import Add from '../components/Add';
import TableActivity from '../components/TableActivity';
import Navigation from '../components/Navigation';
import useGetRows from '../hooks/useGetRows'
import AppContext from '../context/AppContext';
import '../assets/styles/App.css';

const App = () => {
  const initialState = useGetRows();
  const [rows, setRows] = useState([]);

  function handleOnEnter(text) {
    let newArray = [...rows]
    newArray.push(createData(text))
    setRows(newArray);
    console.log(newArray)
	}

  function createData(activity) {
    return {activity};
  }

  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Add handleOnEnter={handleOnEnter}/>
      <Navigation />
      <TableActivity rows={rows}/>
    </AppContext.Provider>
  );
};

export default App;
