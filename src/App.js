import React from 'react';
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import data from "../src/data"


function App() {
  const cardNew = data.map(item => {
    return <Card 
    item={item}
    /> 
  }
  )
  return (
    <div>
      <Navbar />
      {cardNew}
    </div>
  );
}

export default App;
