import React from 'react';
class Child extends React.Component {
  // 子组件更新，父组件不更新
  state = {
    countC: 1,
  };
  componentDidMount() {
    console.log('组件初始化');
    console.log(this.props);
  }
  componentWillUnmount() {
    console.log('组件卸载了');
  }
  componentDidUpdate() {
    console.log('组件更新了');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (nextState.countC == this.state.countC) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <h1>Hello, child我是子组件的countC---{this.state.countC}</h1>
        <button
          onClick={() => {
            this.setState({ countC: this.state.countC * 2 });
          }}
        >
          点我*2
        </button>
      </div>
    );
  }
}
export default Child;
