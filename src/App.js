import React from 'react';
import './App.css';
import Dinner from './dinner'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Word!</h1> */}
      <h1>Monday</h1>
      <Dinner dishName="Fried Rice" meat="prawn"/>

      <hr/>

      <h1>Tuesday</h1>
      <Dinner dishName="Fried Rice" meat="chowmein"/>

      <hr/>
      <h1>Wednesday</h1>
      <Dinner dishName="Chicken Biryani" meat="Cold drink"/>
     
    </div>
  );
}

export default App;
