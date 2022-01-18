import React, {useState} from 'react'
import Header from '../components/Header';
import Add from '../components/Add';
import TableActivity from '../components/TableActivity';
import '../assets/styles/App.css';



const App = () => {
  const [rows, setRows] = useState([]);

  const handleSubmit =(event) => {
		event.preventDefault();
    let newArray = [...rows]
    newArray.push(createData(event.target[0].value))
    setRows(newArray);
	}

  function createData(activity) {
    return {activity};
  }
  return (
    <div className="App">
      <Header />
      <Add handleSubmit={handleSubmit} />
      <TableActivity rows={rows}/>
    </div>
  );
};

export default App;
