import { useState, useMemo ,useCallback,useEffect} from "react";

export  const useCalculator = () => {
    const [input,setInput ] = useState<string>(() => localStorage.getItem('calc-input') || '');

    useEffect(() => {
    localStorage.setItem('calc-input', input);
    }, [input]);


    const handleButtonClick = useCallback((value: string) => {
    if (value === '=') {
      try {
        const result = new Function(`return ${input}`)();
        setInput(eval(input));
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prev) => prev + value);
    }
    },[input])

   const isError = useMemo(() => input === 'Error', [input]);

   return {
    input,
    setInput,
    handleButtonClick,
    isError,
  };

}

