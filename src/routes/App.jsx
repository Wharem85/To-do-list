import React, {useState} from 'react'
import Header from '../components/Header';
import Add from '../components/Add';
import TableActivity from '../components/TableActivity';
import '../assets/styles/App.css';

const App = () => {
  const [rows, setRows] = useState([]);

  function handleOnEnter(text) {
		console.log("ingresar", text);
    let newArray = [...rows]
    newArray.push(createData(text))
    setRows(newArray);
	}

  function createData(activity) {
    return {activity};
  }
  return (
    <div className="App">
      <Header />
      <Add handleOnEnter={handleOnEnter}/>
      <TableActivity rows={rows}/>
    </div>
  );
};

export default App;
