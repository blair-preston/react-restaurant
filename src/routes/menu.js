import { getData } from '../data.js'; 
import React, { useEffect, useState } from 'react';
import menuPic from '../wireframes/menu.jpg';


export default function Menu() {
  const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json';
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData(URL)
    .then((data) => {
      setMenu(data)
    })
}, []);

  return (
    <div className="App" style={{ backgroundImage:`url(${menuPic})` }}> 
    <div className="space"></div>
      <h2>MEXICAN PLATES</h2>
        <div className="cardWrapper">
          {menu.filter((tacoItem) => tacoItem.cuisine.label === 'Mexican').map((tacoItem) => <TacoItem key={tacoItem.id} tacoItem={tacoItem} />)}
        </div>
      <h2>SANDWICHES</h2>
        <div className="cardWrapper">
          {menu.filter((sandwichItem) => sandwichItem.category.title === 'Sandwiches').map((sandwichItem) => <SandwichItem key={sandwichItem.id} sandwichItem={sandwichItem} />)}
        </div>
      <h2>DESSERTS</h2>
        <div className="cardWrapper">
          {menu.filter((dessertItem) => dessertItem.category.title === 'Dessert').map((dessertItem) => <DessertItem key={dessertItem.id} dessertItem={dessertItem} />)}
        </div>
    </div>
  );
}

const TacoItem = ({ tacoItem }) => {
  return (
    <div className="card">
      <p className="boldText">{tacoItem.title}</p>
      <div>{tacoItem.price}</div>
      <div>{tacoItem.description}</div>
    </div>
  )
}

const SandwichItem = ({ sandwichItem }) => {
  return (
    <div className="card">
      <p className="boldText">{sandwichItem.title}</p>
      <div>{sandwichItem.price}</div>
      <div>{sandwichItem.description}</div>
    </div>
  )
}

const DessertItem = ({ dessertItem }) => {
  return (
    <div className="card">
      <p className="boldText">{dessertItem.title}</p>
      <div>{dessertItem.price}</div>
      <div>{dessertItem.description}</div>
    </div>
  )
}