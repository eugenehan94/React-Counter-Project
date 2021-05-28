import { useState } from "react";
import "./App.css";

//Create a counter app - increase, decrease and reset
const App = () => {
  const [count, setCount] = useState(0);

  const increaseByOne = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const increaseByTen = () => {
    setCount((prevState) => {
      return prevState + 10;
    });
  };
  const increaseByHundred = () => {
    setCount((prevState) => {
      return prevState + 100;
    });
  };
  const reset = () => {
    setCount((prevState) => {
      return 0;
    });
  };

  const decreaseByOne = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const decreaseByTen = () => {
    setCount((prevState) => {
      return prevState - 10;
    });
  };
  const decreaseByHundred = () => {
    setCount((prevState) => {
      return prevState - 100;
    });
  };

  const randomPositive = () => {
    setCount((prevState) => {
      return Math.floor(Math.random() * (99999 - 0) + 0);
    });
  };

  const randomNegative = () => {
    setCount((prevState) => {
      return Math.floor(Math.random() * (-99999 - 0) + 0);
    });
  };

  return (
    <div className="container">
      <h1>Complex Counter</h1>

      <h1>{count}</h1>

      <div className="buttons">
        <button onClick={increaseByOne}>Increase 1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decreaseByOne}>Decrease 1</button>
        <button onClick={randomPositive}>Random + Number</button>
        <button onClick={randomNegative}>Random - Number</button>

        <button onClick={increaseByTen}>Increase 10</button>
        <button onClick={decreaseByTen}>Decrease 10</button>

        <button onClick={increaseByHundred}>Increase 100</button>
        <button onClick={decreaseByHundred}>Decrease 100</button>
      </div>
    </div>
  );
};

export default App;
