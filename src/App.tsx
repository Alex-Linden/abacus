import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Display } from './Display';
import { Button } from './Button';
import './App.css';

const operations = ['+', '-', '*', '/'];

function App() {
  const [formula, setFormula] = useState('1+1');
  const [error, setError] = useState('');
  const [numberValid, setNumberValid] = useState(true);

  function convertOperation(operation: string): void {
    try {
      // Use `Function` to safely evaluate the input.
      const result = new Function(`return ${operation}`)();

      // Ensure the result is a finite number
      if (typeof result !== "number" || !isFinite(result)) {
        throw new Error("Calculation resulted in an invalid number");
      }

      setFormula(result.toString());
      setNumberValid(false);
    } catch (error) {
      setError(`Error: ${(error as Error).message}`);
    }
  }

  function clearFormula(): void {
    setFormula('');
    setNumberValid(true);
    setError('');
  }

  const addToOperation = (value: string) => {
    if (numberValid || operations.includes(value)) {
      const newValue = formula + value;
      setFormula(newValue);
      setNumberValid(true);
    } else {
      clearFormula();
      setFormula(value);
    }
  };

  const numberButton = Array.from(Array(9)).map((_, index) => {
    const number = index + 1;
    return (
      <Button key={`numbtn-${number}`} text={number.toString()} buttonFunc={() => addToOperation(number.toString())} />
    );
  });

  const operationButton = operations.map((operation) => {
    return (
      <Button key={`opbtn-${operation}`} text={operation} buttonFunc={() => addToOperation(operation)} />
    );
  });

  return (
    <>
      <div className="app">
        <Display operation={formula} />
        {numberButton}
        <Button key="equalsbtn" text="=" buttonFunc={() => convertOperation(formula)} />
        {operationButton}
        <Button key="clearbtn" text="C" buttonFunc={clearFormula} />
        {error && <p>{error}</p>}
      </div>
    </>
  );
}


export default App;
