import { useState, useEffect, createRef } from 'react';
import Child from './components/child1';
export default function() {
  let [count, setCount] = useState(0);
  //   let childRef = createRef();
  useEffect(() => {
    let timeId = setInterval(() => {
      setCount((count += 1));
    }, 1000);
    // console.log(childRef.current);
    return () => clearInterval(timeId); // 页面销毁时，清除定时器，
  }, []);
  return (
    <>
      <div>
        mome-实现shouldComponentUpdate,React.memo()是一个高阶函数，它与
        React.PureComponent类似，但是一个函数组件而非一个类。[1]
      </div>
      <Child seconds={1} />
      <div>我是count的值----{count}</div>
    </>
  );
}
