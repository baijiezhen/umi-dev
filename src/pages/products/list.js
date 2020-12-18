import request from '../../utils/request';
import { useEffect, useState } from 'react';
import router from 'umi/router';

export default function(props) {
  let { location } = props;
  let [list, setList] = useState([]);
  useEffect(() => {
    let id = location.query.id;
    request('/product_list', {
      method: 'get',
      params: {
        category_id: id,
      },
    }).then(res => {
      setList(res.content);
    });
  }, []);
  const goDet = id => {
    router.push({
      pathname: '/products/detail',
      query: {
        id,
      },
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                goDet(item.id);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
