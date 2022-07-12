import "./styles.css";
import { useReducer } from "react";
export default function App() {
  function countReducer(state, action) {
    switch (action.type) {
      case "ADD":
        return { count: state.count + 1 };
      case "SUB":
        return { count: state.count - 1 };
      default:
        return state.count;
    }
  }

  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="App">
      <h1>useReducer practice</h1>
      <h2>we will create a counter using useReducer</h2>

      <button onClick={() => dispatch({ type: "ADD" })}>Add One </button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "SUB" })}> Subtract one</button>
    </div>
  );
}
