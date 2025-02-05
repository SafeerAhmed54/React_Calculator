"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl font-bold">Calculator</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-4 rounded shadow-md w-80">
          <div className="mb-4">
            <input
              type="text"
              value={input}
              readOnly
              className="w-full text-right text-2xl p-2 border border-gray-300 rounded"
            />
            <div className="text-right text-xl text-gray-500">{result}</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "/"].map((value) => (
              <button
                key={value}
                onClick={() => handleClick(value)}
                className="bg-blue-600 text-white text-2xl p-4 rounded"
              >
                {value}
              </button>
            ))}
            {["4", "5", "6", "*"].map((value) => (
              <button
                key={value}
                onClick={() => handleClick(value)}
                className="bg-blue-600 text-white text-2xl p-4 rounded"
              >
                {value}
              </button>
            ))}
            {["1", "2", "3", "-"].map((value) => (
              <button
                key={value}
                onClick={() => handleClick(value)}
                className="bg-blue-600 text-white text-2xl p-4 rounded"
              >
                {value}
              </button>
            ))}
            {["0", ".", "=", "+"].map((value) => (
              <button
                key={value}
                onClick={() => (value === "=" ? handleCalculate() : handleClick(value))}
                className="bg-blue-600 text-white text-2xl p-4 rounded"
              >
                {value}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="col-span-4 bg-red-600 text-white text-2xl p-4 rounded"
            >
              Clear
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4">
        <p className="text-center">&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}