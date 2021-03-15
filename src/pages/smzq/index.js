import React from 'react';
import Child from './components/child';
// 父组件更新，子组件一定更新，父组件的更新，子组件也会重新被创建
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  ChildPage = '';
  componentWillMount() {
    console.log('组件将要加载');
  }
  componentDidMount() {
    console.log('组件初始化'); // 一般请求接口
  }
  componentWillUnmount() {
    console.log('组件卸载了'); // 一般清除一些副作用比如定时器什么的
  }
  componentDidUpdate() {
    console.log('组件更新了');
  }
  fn() {
    if (this.ChildPage) {
      //   console.log(this.ChildPage.state.countC);
      this.ChildPage.addCount(); //调用子组件的dream方法
    }
  }
  onRefChild = ref => {
    // console.log(ref);
    this.ChildPage = ref;
    // console.log(this.ChildPage);
  };
  render() {
    return (
      <div>
        <h4>我是父组件中的count---值{this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          点我加1
        </button>
        <button
          onClick={() => {
            this.fn();
          }}
        >
          父组件如何调用子组件方法并且修改子组件的值
        </button>
        <Child {...this.state} onRef={this.onRefChild}></Child>
      </div>
    );
  }
}
export default Welcome;
