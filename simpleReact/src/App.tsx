import { useState } from 'react'
import './App.css'

function App() {
  //type aq = number | string;
  
  const [name, setName] = useState("");
  return (
    <>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("")}>Reset</button>
    </>
  )
}

export default App
