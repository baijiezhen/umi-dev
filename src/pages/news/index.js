import Link from 'umi/link';
import router from 'umi/router';
import { connect } from 'dva';
import { Button } from 'antd';
const News = props => {
  //   console.log(props);
  let { newsList, dispatch } = props;
  //   console.log(newsList);
  const goDetail = id => {
    console.log(id);
    console.log(router);
    // router.push({
    //   pathname: '/list',
    //   query: {
    //     a: 'b',
    //   },
    // });
    router.push({
      pathname: '/news/detail',
      query: {
        id,
      },
    });
  };
  const addNews = () => {
    dispatch({
      type: 'news/addNewList',
    });
  };
  return (
    <div>
      <ul>
        {newsList.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              <Link to={`/news/${item}`}>
                我是第{index + 1}项----我的值是{item}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button value="large" onClick={addNews}>
        点我添加新闻
      </Button>
    </div>
  );
};
export default connect(({ news }) => {
  //   console.log(news);
  return {
    newsList: news.newList,
  };
})(News);
