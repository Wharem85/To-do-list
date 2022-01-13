import React from 'react'
import Header from '../components/Header';
import Add from '../components/Add';
import Table from '../components/Table';
import '../assets/styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Add />
      <Table />
    </div>
  );
};

export default App;

