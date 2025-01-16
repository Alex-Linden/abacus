import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Display } from './Display'
import './App.css'

function App() {
  const [count, setCount] = useState("123")

  function convertOperation(operation: string): string {
    try {
      // Use `Function` to safely evaluate the input.
      const result = new Function(`return ${input}`)();

      // Ensure the result is a finite number
      if (typeof result !== "number" || !isFinite(result)) {
        throw new Error("Calculation resulted in an invalid number");
      }

      return result.toString();
    } catch (error) {
      return `Error: ${(error as Error).message}`;
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
