import React, { useState } from 'react';
import s from './Car.module.scss';
import CarsName from './CarsName/CarsName';

const state = {
  cars: [
    { name: 'Audi', year: 2018 },
    { name: 'Ford', year: 2016 },
    { name: 'Lexus', year: 2010 },
  ],
  pageTitle: 'React Components',
  showCars: false,
};

function Car() {
  const [title, setTitle] = useState(state.pageTitle);
  const changeTitleHandler = (newTitle) => {
    setTitle(newTitle);
  };

  const [isVisiable, setIsVisiable] = useState(state.showCars);
  const toggleCarsHandler = () => {
    setIsVisiable(!isVisiable);
  };

  let carsElements = null;
  if (isVisiable) {
    carsElements = state.cars.map((car) => (
      <CarsName
        name={car.name}
        year={car.year}
        changeTitle={() => changeTitleHandler(car.name)}
      />
    ));
  }
  return (
    <div className={s.Car}>
      <h2>{title}</h2>
      <button className={s.butt} type="button" onClick={toggleCarsHandler}>
        Toggle cars
      </button>
      <input type="text" onChange={(e) => changeTitleHandler(e.target.value)} />
      <button type="button" onClick={() => changeTitleHandler('Change click')}>
        change title
      </button>
      {carsElements}
    </div>
  );
}

export default Car;
