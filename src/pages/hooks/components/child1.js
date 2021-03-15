import React from 'react';
function Child({ seconds }) {
  console.log('I am rendering,count---' + seconds);
  return <div>I am update every {seconds} seconds</div>;
}
function areEqual(prevProps, nextProps) {
  //   console.log(prevProps, nextProps);
  if (nextProps.seconds % 2 === 0) {
    // 偶数
    return true;
  } else {
    return false;
  }
}
// export default Child;
export default React.memo(Child);
// export default React.memo(Child, areEqual);
