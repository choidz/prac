import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const add = () => {
    setResult(first + second);
  };

  const sub = () => {
    setResult(first - second);
  };

  const mul = () => {
    setResult(first * second);
  };

  const div = () => {
    setResult(first / second);
  };

  return (
    <div className="flex flex-col items-center">
      <input className="border"
        type="number"
        placeholder="Number 1"
        value={first}
        onChange={(e) => setFirst(+e.target.value)}
      />
      <input className="border"
        type="number"
        placeholder="Number 2"
        value={second}
        onChange={(e) => setSecond(+e.target.value)}
      />
      <div className="flex flex-row gap-4">
      <button className="px-4 bg-black text-white" onClick={add}>+</button>
      <button className="px-4 bg-black text-white" onClick={sub}>-</button>
      <button className="px-4 bg-black text-white" onClick={mul}>*</button>
      <button className="px-4 bg-black text-white" onClick={div}>/</button>
      </div>
      <p>result: {result}</p>
    </div>
  );
}

export default App;
