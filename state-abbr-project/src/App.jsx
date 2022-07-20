import { useState } from 'react'
import DropDownButton from './components/DropDownButton'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <h1>State Abbreviator</h1>
      <h2>Select a State from the dropdown below</h2>
      <DropDownButton />
    </div>
  )
}

export default App
