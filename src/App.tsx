import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Display } from './Display'
import { Button } from './Button'
import './App.css'

function App() {
  const [formula, setFormula] = useState('1+1')
  const [error, setError] = useState('')

  function convertOperation(operation: string): string {
    try {
      // Use `Function` to safely evaluate the input.
      const result = new Function(`return ${input}`)();

      // Ensure the result is a finite number
      if (typeof result !== "number" || !isFinite(result)) {
        throw new Error("Calculation resulted in an invalid number");
      }

      setFormula(result.toString())
    } catch (error) {
      setError(`Error: ${(error as Error).message}`);
    }
  }

  const handleClick = (value : string) => {
    let newValue = formula + value
    setFormula(newValue)

  }

  const numberButton = Array.from(Array(9)).map((_, index) => {
    const number = index + 1
    return (
      <Button text={number.toString()} buttonFunc={handleClick} />
    )
  })

  return (
    <>
      <div className="app">
        <Display operation={formula} />
        {numberButton}
      </div>
    </>
  )
}

export default App
