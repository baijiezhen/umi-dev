import React, { useState, useMemo } from 'react';

function allTotal(count) {
  console.log('重新计算');
  let total = 0;
  for (let i = 0; i <= count; i++) {
    total += i;
  }
  return total;
}

export default function MemoDemo() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState('jack');

  //   const total = allTotal(count);
  const total = useMemo(() => {
    return allTotal(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和:{total}</h2>
      <h2>我是一个可有可无的小虾米：{show}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow('rose' + Math.random() * 10)}>切换</button>
    </div>
  );
}
