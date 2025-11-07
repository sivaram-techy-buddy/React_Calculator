import { create } from "zustand";
import { persist,devtools } from "zustand/middleware";


interface calculatorState {
    input : string;
    setInput : (value: string)=> void;
    handleButtonClick : (value: string)=> void;

}

export const useCalculatorStore = create<calculatorState>
//   persist(
((set,get)=>({
    
     input: '',
  setInput: (value) => set({ input: value }),
  handleButtonClick: (value) =>{
     const { input, setInput } = get();

    if (value === '=') {
      try {
        const result = new Function(`return ${input}`)();
        setInput(String(result));
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  },

// )
}));