
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  })
const handleAdd =() => {
  setCount((pre) =>  {
    return {
      ...pre,
      num: pre.num + 1
    }
  })
}
const handleSub =() => {
  setCount((pre) =>  {
    return {
      ...pre,
      num: pre.num - 1
    }
  })
}
  return (
    <div className="App">
      <button onClick={handleSub}>-</button>
      <span>{count.num}</span>
      <button onClick={handleAdd}>+</button>
    
    </div>
  );
}

export default App;
