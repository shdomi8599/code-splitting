import React from 'react';

function App() {
  const onClick = () => {
    import('./notify')
    .then(res => res.default())
  };
  
  return (
    <div>
      <p onClick={onClick}>Hello World</p>
    </div>
  );
}

export default App;