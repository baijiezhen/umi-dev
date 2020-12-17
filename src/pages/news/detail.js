import { useEffect } from 'react';
export default function(props) {
  console.log(props);
  let { location } = props;
  useEffect(() => {
    console.log(location.query.id);
  });

  return <div>我是详情页面1</div>;
}
