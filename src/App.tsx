import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Display } from './Display'
import './App.css'

function App() {
  const [count, setCount] = useState("123")

  function convertOperation(operation: string): string {
    let nums = []

    let tmp = ""
    for (let i = 0; i < operation.length; i++) {
      if (!isNsN(operation[i]) || operation[i] === ".") {
        tmp += operation[i]
      }else{
        nums.push(parseInt(tmp))
        tmp = ""

      }
  }

  return (
    <>
      <div className="app">
        <Display operation={count} />
      </div>
    </>
  )
}

export default App
