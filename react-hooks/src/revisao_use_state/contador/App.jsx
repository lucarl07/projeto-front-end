import React from "react";
import './App.css'

const App = () => {
  const [count, setCount] = React.useState(0)

  const addToCount = () => setCount(count + 1);
  const rmFromCount = () => setCount(count - 1);

  return (
    <div id="App">
      <button className="countChanger" onClick={rmFromCount}>-</button>
      <span className="count">
        {count}
      </span>
      <button className="countChanger" onClick={addToCount}>+</button>
    </div>
  );
}

export default App;