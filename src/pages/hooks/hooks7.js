import React, { useRef, useState, useEffect } from 'react';

export default function UseRefDom2() {
  const [count, setCount] = useState(0);

  const numRef = useRef(count);
  useEffect(() => {
    console.log(count);
    numRef.current = count;
  }, [count]);
  return (
    <div>
      <h2> {numRef.current}</h2>
      {count}
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  );
}
