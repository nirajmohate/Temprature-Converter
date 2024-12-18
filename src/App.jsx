import { useState } from 'react'
import './App.css'

function App() {
  const [temp, setTemp] = useState("");
  const [converted, setConverted] = useState(null);

  const convertToFahrenheit = () => setConverted((temp * 9) / 5 + 32);
  const convertToCelsius = () => setConverted(((temp - 32) * 5) / 9);

  return (
    <>
      <div>
        <h1>Temprature Converter</h1>
        <input type="number" onChange={(e) => setTemp(e.target.value)} placeholder='Temprature' />
        <button onClick={convertToFahrenheit}> Convert To F </button>
        <button onClick={convertToCelsius}> Convert To C </button>
        {converted !== null && <p>Converted : {converted.toFixed(2)} </p>}
      </div>
    </>
  )
}

export default App
