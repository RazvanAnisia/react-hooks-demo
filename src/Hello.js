import React from 'react';

export const Hello = React.memo(({ increment }) => {
  return <button onClick={increment}>Hello</button>;
});
