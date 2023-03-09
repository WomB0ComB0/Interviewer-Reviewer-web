import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Kyoshi from "./component/Nicole";
import Mike from  "./component/Mike";
import AuthContainer from "./component/AuthContainer";
import "./App.css";
import Nicole from "./component/Nicole";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AuthContainer />
      <Nicole/>
      <Mike/>
    </div>
  );
}

export default App;
