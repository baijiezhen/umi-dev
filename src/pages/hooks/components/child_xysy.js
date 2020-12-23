import React, { useState, useImperativeHandle } from 'react';
export default function(props) {
  const [val, setVal] = useState(0);
  useImperativeHandle(props.cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: () => {
      setVal(val + 1);
    },
  }));
  return (
    <>
      <div>我是子组件---{val}</div>
    </>
  );
}
