import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Display } from './Display'
import './App.css'

function App() {
  const [count, setCount] = useState("123")

  return (
    <>
      <div className="app">
        <Display operation={count} />
      </div>
    </>
  )
}

export default App
