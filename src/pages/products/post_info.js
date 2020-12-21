import { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import request from '../../utils/request';
export default function(props) {
  console.log(props);
  let [name, setName] = useState('');
  let [posterSrc, setSrc] = useState();
  let { location } = props;
  let id = location.query.id;
  useEffect(() => {
    // console.log(match.params.id);
  });
  const onChange = e => {
    setName(e.target.value);
  };
  const ToPost = () => {
    request('/poster', {
      method: 'get',
      params: {
        realname: name,
        product_id: id,
      },
    }).then(res => {
      console.log(res);
    });
  };
  return (
    <div>
      <Input
        defaultValue="jack"
        placeholder="输入您的姓名"
        style={{ width: '200px' }}
        onChange={e => {
          onChange(e);
        }}
      />
      <Button value="large" onClick={ToPost}>
        生成海报
      </Button>
      <hr />
      <div>
        <h4>我的专属海报</h4>
        <img src="" alt="" />
      </div>
    </div>
  );
}
