import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  let [count,setCount] = useState(0)
  return (
    <div className="App">
      <h1 className={`${count % 2 == 0 ? "green" : "red"}`}>Counter = {count}</h1>
      <button onClick={()=>{
        let newN = count+1
        setCount(newN)
        // return newN
      }}>
        <strong>Add 1</strong>
      </button>
      <button onClick={()=>{
        let newN = count-1
        setCount(newN)
        // return newN
      }}>
        <strong>Dec 1</strong>
      </button>
      <button onClick={()=>{
        let newN = count*2
        setCount(newN)
        // return newN
      }}>
        <strong>Double</strong>
      </button>
     </div>
  );
}

export default App;
