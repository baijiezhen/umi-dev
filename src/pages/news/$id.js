import { useEffect } from 'react';
export default function(props) {
  console.log(props);
  let { match } = props;
  useEffect(() => {
    console.log(match.params.id);
  });
  return <div>我是详情页面</div>;
}
