//useMemo,useCallback
import React, { memo, useMemo, useCallback, useState } from 'react';
// import About from './About';

const Foo = memo(props => {
  let count = props.count;
  console.log('函数重新渲染');
  return <div onClick={props.addCount}>count:{count}</div>;
});

// class App extends PureComponent {
//   state = {
//     count: 0,
//     name: 0
//   }
//   render() {
//     return (
//       <Fragment>
//         <Foo count={this.state.count} ></Foo>
//         <button onClick={() => { this.setState(() => ({ count: this.state.count + 1 })) }}>加count</button>
//       </Fragment>
//     )
//   }
// }
const useCallbackDemo = memo(() => {
  const [count, setCount] = useState(0);
  let double = useMemo(() => {
    return count * 2;
  }, [count == 3]);
  let addCount = useCallback(() => {
    //useCallback 可以看成useMemo返回函数时的简写，赋值给onClick 不会引发函数重新渲染
    setCount(count => count + 1);
  }, []); //括号可以看成依赖数组，当为空时，只有第一次挂载时才会渲染，当有数据时如[count]，当count改变时才会改变，有多个数据时，所有数据改变时才会改变
  // const addCount=()=>{
  //   setCount((count) => count + 1)
  // }
  return (
    <div>
      <Foo addCount={addCount} count={double}></Foo>
      {/* 防止传入函数会重复渲染，可以用上面的useMemo()或者它的简易实现useCallback
      返回一个函数，节省性能 */}
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        count+1
      </button>
      {/* 直接赋值当数据改变时，这个函数会重复渲染浪费性能<br> */}
    </div>
  );
});
export default useCallbackDemo;
