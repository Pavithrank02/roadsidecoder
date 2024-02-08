
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
const handleAdd =() => {
  setCount(count + 1)
}
const handleSub =() => {
  setCount(count - 1)
}
  return (
    <div className="App">
      <button onClick={handleSub}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    
    </div>
  );
}

export default App;
