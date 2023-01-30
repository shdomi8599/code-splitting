import React from 'react';
import MyComponent from "../src/MyComponent"

function App() {
  const onClick = () => {
    import('./notify')
    .then(res => res.default())
  };
  
  return (
    <div>
      <p onClick={onClick}>Hello World</p>
      <MyComponent />
    </div>
  );
}

export default App;