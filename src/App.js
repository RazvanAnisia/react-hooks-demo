import React, { useState, useReducer } from 'react';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

function reducer(state, action) {
  //react the action and change the state accordingly
  switch (action.type) {
    case ADD_TODO:
      return {
        todoCount: state.todoCount + 1,
        todos: [...state.todos, { text: action.text, completed: false }]
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, id) =>
          id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        todoCount: state.todoCount
      };
    default:
      return state;
  }
}
const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState('');
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: ADD_TODO, text });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)}></input>
      </form>
      {todos.map((t, i) => (
        <li
          style={{ opacity: t.completed ? '0.5' : '1' }}
          key={i}
          onClick={() => dispatch({ type: TOGGLE_TODO, id: i })}
        >
          {t.text}
        </li>
      ))}
      {todoCount}
    </div>
  );
};
export default App;
