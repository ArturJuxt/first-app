import { combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + Math.floor(Math.random() * 10);
    default:
      return state;
  }
};

const initialTodoState = [
  { id: 1, completed: false, title: 'BMW' },
  { id: 2, completed: false, title: 'Mazda' },
  { id: 3, completed: false, title: 'Mercedes' },
];

const todoReducer = (store = initialTodoState, action) => {
  switch (action.type) {
    case 'DELETE_TODO':
      return store.filter((el) => el.id !== action.payload.id);
    case 'ADD_TODO':
      return [...store, action.payload];
    case 'TOGGLE_TODO':
      return store.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    default:
      return store;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
