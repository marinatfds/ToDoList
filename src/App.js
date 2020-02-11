import React from "react";
import "./styles.css";

export default function App() {
  const [toDos, setToDos] = React.useState([]);

  const keyDownHandler = React.useCallback(function(event) {
    const { value } = event.target;

    if (event.key === "Enter" && value) {
      setToDos(prevToDos => [...prevToDos, value]);

      event.target.value = "";
    }
  }, []);

  return (
    <div className="App">
      <h1>To do:</h1>

      <input onKeyDown={keyDownHandler} />

      <ul>
        {toDos.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
