import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalculator = (value) => {
    if (
      (ops.includes(value) && calc == " ") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculator(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLastNum = () => {
    if (calc == " ") {
      return;
    }
    const newValue = calc.slice(0, -1);
    setCalc(newValue);
  };
  const wipe = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : " "}&nbsp; {calc || 0}
        </div>
        <div className="operators">
          <button onClick={() => updateCalculator("/")}>/</button>
          <button onClick={() => updateCalculator("*")}>*</button>
          <button onClick={() => updateCalculator("+")}>+</button>
          <button onClick={() => updateCalculator("-")}>-</button>
          <button onClick={wipe}>AC</button>

          <button onClick={deleteLastNum}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalculator("0")}>0</button>
          <button onClick={() => updateCalculator(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
