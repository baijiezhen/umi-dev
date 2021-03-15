import React, { useContext, useState } from 'react';
import ComponentB from './components/ComponentB';
import TextContext from '../../utils/com';
// console.log(TextContext);
const UseContext = () => {
  //   const TextContext = React.createContext();
  const ComponentA = () => {
    const [text, setText] = React.useContext(TextContext);
    return (
      <>
        <button onClick={() => setText('Hello Component A')}>改变text的值 ----{text}</button>
        <ComponentB></ComponentB>
      </>
    );
  };

  return (
    <TextContext.Provider value={useState('Hello World.')}>
      <ComponentA />
     
    </TextContext.Provider>
  );
};
export default UseContext;
