import React, { useState } from "react";

const IncrementInput = ({ count, setCount }) => {
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={((e) => setInputValue(e.target.valueAsNumber))}
      />
      <button onClick={(() => setCount(count + +inputValue))}>
        Inc by Value
      </button>
    </>
  );
};

export default IncrementInput;
