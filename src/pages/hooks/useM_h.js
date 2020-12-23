import { useState, useMemo,useEffect } from 'react';
export default function() {
  const [number, setNumber] = useState(0);
  const [handerClick1, handerClick2, handerClick3] = useMemo(() => {
    const fn1 = () => {
      console.log(1);
      /* 一些操作 */
    };
    const fn2 = () => {
      /* 一些操作 */
      console.log(2);
    };
    const fn3 = () => {
      /* 一些操作 */
      console.log(3);
    };
    return [fn1, fn2, fn3];
  }, []); /* 只有当数据里面的依赖项，发生改变的时候，才会重新声明函数。 */

  // 使用useMemo 可是使得handerClick1，handerClick2，handerClick3被缓存下来，
  // 如果不使用useMemo 点击按钮，组件更新，点击事件就会重新被创建，影响性能
  return (
    <div>
      <a onClick={handerClick1}>点我有惊喜1</a>
      <a onClick={handerClick2}>点我有惊喜2</a>
      <a onClick={handerClick3}>点我有惊喜3</a>
      <button onClick={() => setNumber(number + 1)}> 点击 {number} </button>
    </div>
  );
}
