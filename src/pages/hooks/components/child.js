import React from 'react';
class Child extends React.PureComponent {
  render() {
    console.log('I am rendering');
    return <div>I am update every {this.props.seconds} seconds</div>;
  }
}
