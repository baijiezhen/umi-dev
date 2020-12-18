import { useEffect } from 'react';
import { Input } from 'antd';
export default function(props) {
  console.log(props);
  let { match } = props;
  useEffect(() => {
    // console.log(match.params.id);
  });
  return (
    <div>
      <Input placeholder="输入您的姓名" style={{ width: '200px' }} />
    </div>
  );
}
