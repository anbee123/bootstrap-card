import React from 'react';
import cardsArray from './cardData';
import Card from './components/Card';


const cards = cardsArray.map ((ele, index)=> {
  return < Card {...ele}  key = {index}/>


})


export default function App() {

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
{cards}
      
      </section>
    </div>
  );
}
