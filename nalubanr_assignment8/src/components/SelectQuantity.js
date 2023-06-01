// refrence// https://codesandbox.io/s/bro43?file=/src/App.js
// refrence https://canvas.oregonstate.edu/courses/1901690/pages/exploration-state-and-react-hooks
// https://react-icons.github.io/react-icons/icons?name=md
// https://easycodesolution.com/2021/06/22/react-quantity-picker/

import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

function SelectQuantity() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <button onClick={increment} disabled={count >= 10}>
        <MdAdd />
      </button>
      <span>{count}</span>
      <button onClick={decrement} disabled={count <= 0}>
        <MdRemove />
      </button>
    </div>
  );
}

export default SelectQuantity;
