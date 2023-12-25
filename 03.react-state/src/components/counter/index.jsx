import React, { useState } from "react";
import Decrement from "../decrement";
import Increment from "../increment";
import IncrementInput from "../incrementInput";
import "./index.scss"
const CounterComp = () => {
  const [count, setCount] = useState(0);
  return (
    <section id="counter">
      <div className="container">
        <div className="counter">
            <h1>Counter Example</h1>
        <div className="count">
          <Increment count={count} setCount={setCount} />
          <h3>{count}</h3>
          <Decrement count={count} setCount={setCount} />
        </div>
        <hr />
        <div className="input-value">
          <IncrementInput count={count} setCount={setCount}/>
        </div></div>
        
      </div>
    </section>
  );
};

export default CounterComp;
