import { useState } from 'react'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Content from './components/Content'

import './App.css'
import ClassComp from './components/ClassComp'

function App() {

  return (
    <>
    <div>
    <Title />
    <Navbar />
    </div>
    <div> 
      <Content />
    </div>
    <ClassComp />
      
    </>
  )
}

export default App
