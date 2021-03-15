import { useState, useEffect } from 'react';
const Hooks1 = function() {
  let [count, setCount] = useState(0);
  let [m, setM] = useState(0);
  useEffect(() => {
    let timeId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timeId); // 页面销毁时，清除定时器，
  }, []);
  // useEffect 有两个参数 如果没有第二个参数
  return (
    <>
      <div>打印count值----------{count}</div>
    </>
  );
};
// console.dir(Hooks1);
export default Hooks1;
