// @ts-nocheck
import { useState } from 'react';
import './App.css';


  function App() {
    const [temperature, setTemperature] = useState(0); 
  
    let tempColor;
    if (temperature < 0) {
      tempColor = 'blue';
    } else if (temperature >= 0 && temperature < 15) {
      tempColor = 'green';
    } else if (temperature >= 15 && temperature < 30) {
      tempColor = 'yellow';
    } else {
      tempColor = 'red';
    }
  
    const handleIncrease = () => {
      setTemperature(prevTemp => prevTemp + 1);
    };
  
    const handleDecrease = () => {
      setTemperature(prevTemp => prevTemp - 1);
    };


  // თუ ტემპერატურა 0ზე ნაკლებია, temperature დივის ბეგქრაუნდ ფერი იყოს ლურჯი, თუ მეტია 0ზე და ნაკლებია 15ზე იყოს მწვანე, 15დან 30მდე იყოს ყვითელი, ხოლო 30ის ზევით იყოს წითელი
  return (
    <div className='container'>
      <div className='card'>
        <div className='temperature' style={{ backgroundColor: tempColor }}>
          {temperature} °C
        </div>
        <div className='control-container'>
          <div className='controller plus' onClick={handleIncrease}>
            +
          </div>
          <div className='controller minus' onClick={handleDecrease}>
            -
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;











