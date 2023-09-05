import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './component/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ToDoList/>
    </>
  )
}

export default App
