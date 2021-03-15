import React, { useContext, useState } from 'react';
import com from '../hooks2.js';
import TextContext from '../../../utils/com';
var obj = {
  getParams: function(...args) {
    console.log(...args);
  },
};
var obj1 = { skills: ['html'] };
obj.getParams.call(obj1, 'h5', 'css3', 'js');
// 创建全局的上下文，引入
const ComponentB = props => {
  // 传入的是什么这里接收的就是什么
  const [text, setText] = React.useContext(TextContext);
  return <div>{text}</div>;
};
export default ComponentB;
