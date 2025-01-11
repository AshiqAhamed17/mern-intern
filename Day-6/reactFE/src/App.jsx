import { useState } from 'react'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Content from './components/Content'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Title />
      <Navbar />
    </div>

    <div> 
      <Content />
    </div>
      
    </>
  )
}

export default App
