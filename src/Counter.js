import React from "react";
import { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  const [count, setcount] = useState(initialValue);

  const onIncrease = () => {
    setcount(count + 1);
  };
  const onDecrease = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  //값이 없을시에 0으로 기본설정
  initialValue: 0,
};

export default Counter;
