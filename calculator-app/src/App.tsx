import React from 'react';
import './App.css';
import { CalculatorProvider, useCalculator } from './Context/CalculatorContext';
import Button from './components/Button';
import Display from './components/Display';

const Calculator: React.FC = () => {
  const { input, setInput } = useCalculator();

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setInput(eval(input));
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default App;
