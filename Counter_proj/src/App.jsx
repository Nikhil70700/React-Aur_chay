
import { useState } from 'react';
import './App.css'

function App() {
  let [count, setCount] = useState(0);



  let addCount = () => {
    setCount(count + 1);
  }

  let deleteCount = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  }


  return (
    <>
      <h1>React aur Chai with Counter Button</h1>
      <h2>Counter value :{count}</h2>
      <button className='add-btn' onClick={addCount}>Add Count</button>
      <br /><br />
      <button className='delete-btn' onClick={deleteCount}>Remove Count</button>
    </>
  )
}

export default App
