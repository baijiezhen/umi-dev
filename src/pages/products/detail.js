import request from '../../utils/request';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import router from 'umi/router';

export default function(props) {
  let { location } = props;
  let [info, setInfo] = useState({});
  let id = location.query.id;
  useEffect(() => {
    request('/product_detail', {
      method: 'get',
      params: {
        id,
      },
    }).then(res => {
      setInfo(res.content);
    });
  }, []);
  const ToPosInfo = () => {
    router.push({
      pathname: '/products/post_info',
      query: {
        id,
      },
    });
  };
  return (
    <div>
      <h4>推荐产品</h4>
      <ul>
        {info &&
          info.recommendation &&
          info.recommendation.length &&
          info.recommendation.length > 0 &&
          info.recommendation.map((item, key) => {
            return <li>{item}</li>;
          })}
      </ul>
      <Button value="large" onClick={ToPosInfo}>
        生成海报
      </Button>
    </div>
  );
}
