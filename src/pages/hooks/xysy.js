import { useRef, useState } from 'react';
import ChildrenCom from './components/child_xysy';
import { Tag, Row, Col, InputNumber, Button } from 'antd';
// 实现一个关键词添加组件，接受参数 value 和 onChange

// 总关键字最多500个，可以重复
// 关键字用 Antd 的 Tag 展示
// 关键字可以一次输入多个，多个文本用逗号分割，英文逗号中文逗号都需要支持。Tag 需要支持被单独删除。
// 每次变更时需要调用 onChange
// 可以调包，但尽量使用原生API，兼容性不需要考虑，UI使用Antd。
// 使用 function component + Hooks 实现加分
function Component(props) {
  const [btnState, setBtnState] = useState('1');
  const [val, SetVal] = useState('23');
  return (
    <div>
      <Row gutter={24}>
        <Col span={12}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <div style={{ width: '100px' }}>年龄：</div>
            <InputNumber
              value={val}
              onChange={e => {
                SetVal(e.targer.value);
              }}
            />
          </div>
        </Col>
        <Col span={12}>
          {btnState === '1' ? (
            <Button
              onClick={() => {
                setBtnState('2');
              }}
            >
                              编辑               
            </Button>
          ) : (
            <Button
              onClick={() => {
                setBtnState('1');
              }}
            >
                              保存               
            </Button>
          )}
        </Col>
      </Row>
            
    </div>
  );
}
export default function() {
  const childRef = useRef();
  const setHanshu = () => {
    // changeVal就是子组件暴露给父组件的方法
    childRef.current.changeVal();
  };
  return (
    <>
      <div>常用方法简单使用</div>
      <Component value="TEST,test,bbb，asd" onChange={console.log(123)}></Component>
      <br />
      <button onClick={setHanshu}>调用子组件方法</button>
      <ChildrenCom cRef={childRef}></ChildrenCom>
    </>
  );
}
