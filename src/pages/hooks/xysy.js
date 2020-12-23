import { useRef } from 'react';
import ChildrenCom from './components/child_xysy';
export default function() {
  const childRef = useRef();
  const setHanshu = () => {
    // changeVal就是子组件暴露给父组件的方法
    childRef.current.changeVal();
  };
  return (
    <>
      <div>常用方法简单使用</div>
      <button onClick={setHanshu}>调用子组件方法</button>
      <ChildrenCom cRef={childRef}></ChildrenCom>
    </>
  );
}
