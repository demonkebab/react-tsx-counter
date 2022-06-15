import { useState, useEffect } from "react";
import "./App.css";

/*
type Person = {
  name:string,
  lastName?: string,
  age?: number;
}

const Person:React.FC<Person> = ({name, lastName, age}) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Last name: {lastName}</h2>
      <h2>Age: {age}</h2>
    </>
  )
}
*/

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  //     ^state name  ^setter func  ^react hook

  useEffect(() => {
    setCounter(100);
  }, []);

  const buttonDecrementHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const decrement: HTMLButtonElement = event.currentTarget;
    setCounter(counter - 1);
  };

  const buttonIncrementHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const increment: HTMLButtonElement = event.currentTarget;
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <button name="decrement" onClick={buttonDecrementHandler}>
        -
      </button>
      <h1>{counter}</h1>
      <button name="increment" onClick={buttonIncrementHandler}>
        +
      </button>
    </div>
  );
};

export default App;
