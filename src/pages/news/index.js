import Link from 'umi/link';
import router from 'umi/router';
export default function() {
  const newList = [
    { id: '1', title: '我是第一条新闻' },
    { id: '2', title: '我是第二条新闻' },
    { id: '3', title: '我是第三条新闻' },
    { id: '4', title: '我是第四条新闻' },
  ];
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
  return (
    <div>
      <ul>
        {newList.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <Link to={`/news/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
