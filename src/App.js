import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );
  const { factsData, loading } = useFetch(
    `http://numbersapi.com/${count}/trivia`
  );

  const handleIncremenet = () => {
    setCount(currentCount => currentCount + 1);
  };

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <button onClick={handleIncremenet}>Increment</button>
      {loading ? 'Loading...' : factsData}
      {/* <input
        type="email"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="name"
        value={values.firstName}
        onChange={handleChange}
      /> */}
    </div>
  );
};
export default App;
