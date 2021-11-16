import Button from "./Test.js";
import './App.css';
import "./Test.css";
import { useState } from "react";

function App() {
  const [ c, setC] = useState(0)

  return (
    <div className="App">
      <Button c={c} setC={setC}/>
    </div>
  );
}

export default App;
