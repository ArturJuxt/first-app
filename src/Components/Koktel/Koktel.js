import React, { useState } from 'react';
import s from './Koktel.module.scss';
import KoktelItem from './Koktel-Item/Koktel-Item';

const todoItem = {
  state: [
    { id: 1, water: 'koffe' },
    { id: 2, water: 'tea' },
    { id: 3, water: 'milk' },
    { id: 4, water: 'cola' },
  ],
};

function Koktel() {
  const [cocktails, setCocktails] = useState(todoItem.state);

  const deleteItem = (id) => {
    const newCocktails = cocktails.filter((cocktail) => cocktail.id !== id);
    setCocktails(newCocktails);
  };

  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setCocktails([
        ...cocktails,
        {
          id: Date.now(),
          water: todoTitle,
        },
      ]);

      setTodoTitle('');
    }
  };
  const cocktailsEl = cocktails.map((cocktail) => (
    <KoktelItem
      key={cocktail.id}
      id={cocktail.id}
      water={cocktail.water}
      onDelete={() => {
        deleteItem(cocktail.id);
      }}
    />
  ));

  return (
    <div className={s.koktel}>
      <h2>Kokteyls</h2>
      <input
        type="text"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
        onKeyPress={addTodo}
      />
      {cocktailsEl}
    </div>
  );
}

export default Koktel;
