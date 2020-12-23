import React, { useContext, useState } from 'react';
import com from '../hooks2.js';
import TextContext from '../../../utils/com';
// 创建全局的上下文，引入
const ComponentB = props => {
  const [text, setText] = React.useContext(TextContext);
  return <div>{text}</div>;
};
export default ComponentB;
