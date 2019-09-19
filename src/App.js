import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';
const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);
  return (
    <div>
      <Hello increment={increment} />
      <div>{count}</div>
    </div>
  );
};
export default App;
