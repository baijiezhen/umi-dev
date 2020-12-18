import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../utils/request';
console.log(useParams);
export default function(props) {
  // id 为1 个人理财 id 2 法人理财
  const { id } = useParams();
  //   let { match } = props;
  useEffect(() => {
    if (id == 1) {
      request('/personal_category').then(res => {
        console.log(res);
      });
    }
  }, []);
  return <>{id == 1 ? <div>个人理财</div> : <div>法人理财</div>}</>;
}
