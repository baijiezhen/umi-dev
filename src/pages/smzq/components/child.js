import React from 'react';
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //声明变量
      countC: 1,
    };
    if (props.onRef) {
      //如果父组件传来该方法 则调用方法将子组件this指针传过去
      console.log(2222222);
      props.onRef(this);
    }
  }

  componentDidMount() {
    console.log('组件初始化');
    console.log(this.props);
  }
  componentWillUnmount() {
    console.log('组件卸载了');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log('组件更新了');
  }
  componentWillReceiveProps(nextProps) {
    //     nextProps.openNotice !== this.props.openNotice&&this.setState({
    //         openNotice:nextProps.openNotice
    //     }，() => {
    //       console.log(this.state.openNotice:nextProps)
    //       //将state更新为nextProps,在setState的第二个参数（回调）可以打         印出新的state
    //   })
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    // if (nextProps.count % 2 == 0) {
    //   return false;
    // }
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
  }
  //   dream = dat => {
  //     //定义方法
  //     console.log('父组件调用子组件方法', dat);
  //   };
  addCount() {
    this.setState({ countC: this.state.countC * 2 });
  }
  render() {
    return (
      <div>
        <h1>Hello, child我是子组件的countC---{this.state.countC}</h1>
        <button onClick={this.addCount}>点我*2</button>
      </div>
    );
  }
}
export default Child;
