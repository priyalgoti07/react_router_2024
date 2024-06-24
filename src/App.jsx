import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import { Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-500 p-4'>React Router</h1>
     */}
      {/* <Router>
        <Header />
      </Router>, */}
    </>
  )
}

export default App
