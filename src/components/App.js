import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [show,setShow] = useState("hide");
  const changePara =()=> {
    show==="hide" ? setShow("show") : setShow("hide");
  }

  return (
    <div className="App" id="main">
      <button id="click" onClick={changePara}>Click</button>
      <p className={show} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>

    </div>
  );
}

export default App
