import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'



const App:React.FC =  () => {
  const [count, setCount] = useState(0);
  const [input, SetInput] = useState<string>('');


  const handleButtonClick = (value: string) =>{
    if(value === '='){
        try {
            SetInput(eval(input)); // Basic eval, can be replaced with safer parsing later
        } catch(error) {
         SetInput('Error');
        }
    } else if(value == 'C'){
      SetInput("");
    } else {
      SetInput(input + value);
    }
  }

  return (
    <>
      <div className='calculator'>
     <Display value = {input}/>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
      </div>
      </div>
      
    </>
  )
}

export default App
