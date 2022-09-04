import React, {useState} from "react";

const App2 = () => {

  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>Este es el contador: {count}</div>
      <button onClick={setCount(count + 1)}>hazme click!!</button>
    </div>
  );
}

export default App2;
