import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../utils/request';
import { connect } from 'dva';
import Link from 'umi/link';
import router from 'umi/router';
const List = props => {
  // id 为1 个人理财 id 2 法人理财
  const { id } = useParams();
  let { proList, dispatch } = props;
  console.log(proList);
  useEffect(() => {
    if (id == 1) {
      if (dispatch) {
        dispatch({
          type: 'products/getproList',
        });
      }
    }
  }, []);
  const goDetail = it => {
    let { id, level } = it;
    if (level == 1) {
      router.push({
        pathname: '/products/list',
        query: {
          id,
        },
      });
    }
    console.log(it);
  };
  return (
    <>
      {id == 1 ? (
        <div>
          个人理财
          <ul>
            {proList.map((item, index) => {
              return (
                <li key={index}>
                  {item.product_kind}
                  <ul>
                    {item &&
                      item.list &&
                      item.list.length &&
                      item.list.length > 0 &&
                      item.list.map((it, e) => {
                        return (
                          <li
                            key={it.id}
                            onClick={() => {
                              goDetail(it);
                            }}
                          >
                            {it.name}
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>法人理财</div>
      )}
    </>
  );
};
export default connect(({ products }) => {
  return {
    proList: products.products,
  };
})(List);
