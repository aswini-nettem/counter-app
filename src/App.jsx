import React, {useState} from 'react';

const App = () => {
    const[count, setCount] = useState(0);
    const[step, setStep] = useState("");
    const[history, setHistory] = useState([]);
    const[prevCount, setPrevCount] = useState(null);

    const handleChange = (e) => {
        setStep(e.target.value);
    }

    const handleIncrement = () => {
        const newCount = count + Number(step);
        if(newCount > 0 && newCount <= 10){
            setCount(newCount);
            setHistory([...history, newCount]);
            setPrevCount(count)
        }
    }

    const handleDecrement = () => {
        const newCount = count - Number(step);
        if(newCount >= 0){
            setCount(newCount);
            setHistory([...history, newCount]);
            setPrevCount(count)
        }
    }

    const handleReset = () => {
        setCount(0);
        setStep("");
        setHistory([]);
        setPrevCount(null);
    }
    
    return(
        <div>
                <h3>Counter App</h3>
                <p>Count : {count}</p>
               <div>
                        <input type="number" value={step} onChange={handleChange}/>
               </div>
               <div>
                      <button disabled = { step === "" || count + Number(step) > 10} onClick={handleIncrement}>INCREMENT</button>
                       <button disabled = {step === "" || count - Number(step) < 0} onClick={handleDecrement}>DECREMENT</button>
                       <button onClick={handleReset}>RESET</button>
               </div>
               <div>
                       <p>History : {history.join("->")}</p>
                       <p>Previous Value : {prevCount}</p>
               </div>
        </div>
    )
}

export default App;