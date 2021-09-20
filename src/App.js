import Results from './Components/Results';
import Bill from './Components/Bill';
import { useState } from 'react';
import './App.css';

function App() {

  const [price, setPrice] = useState(0); 
  const [tip, setTip] = useState(.05); 
  const [numPeople, setPeople] = useState(1); 

  const UpdatePrice = (price) => {

    let newPrice = price; 
    setPrice(newPrice); 
    console.log("New Price is: " + newPrice); 
  }

  const UpdateTip = (tip) =>
  {
    setTip(tip); 
    console.log("Setting Tip");
  }

  const UpdatePeople = (people) => {
    setPeople(people); 
  
  }

  const Reset = () => {
    setPrice(0); 
    setTip(0); 
    setPeople(1); 
  }

  return (
    <div className="App">
      <Bill  UpdatePrice={UpdatePrice} UpdateTip={UpdateTip} UpdatePeople={UpdatePeople}/>
      <Results  amount={price} tip={tip} numPeople={numPeople} Reset={Reset}/>
    </div>
  );
}

export default App;
