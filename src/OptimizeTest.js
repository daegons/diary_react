import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`counterA 업데이트 count :${count}`);
  });

  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counterb 업데이트 obj :${obj.count}`);
  });
  return <div>{obj.count}</div>;
};
const areEqual = (preProps, nextProps) => {
  if (preProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};
const MemoizedCounterB = React.memo(CounterB, areEqual);
const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter a</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>a button</button>
      </div>
      <div>
        <h2>counter b</h2>
        <CounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          b button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
