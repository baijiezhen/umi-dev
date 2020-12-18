import { queryPros } from '@/services/product';

const NewsModel = {
  namespace: 'products',
  state: {
    products: [1, 2, 3],
  },
  effects: {
    *getproList(_, { call, put }) {
      const response = yield call(queryPros);
      console.log(response);
      yield put({
        type: 'setProList',
        payload: response.content,
      });
    },
    // *getNewsList(_, { call, put }) {
    //   const response = yield call(queryNews);
    //   console.log(response);
    //   yield put({
    //     type: 'saveCurrentNews',
    //     payload: response,
    //   });
    // },
    // *fetchCurrent(_, { call, put }) {
    //   const response = yield call(queryCurrent);
    //   yield put({
    //     type: 'saveCurrentUser',
    //     payload: response,
    //   });
    // },
  },
  reducers: {
    // saveCurrentNews(state, action) {
    //   return { ...state, newList: action.payload || [] };
    // },
    setProList(state, action) {
      return { ...state, products: action.payload || [] };
    },
  },
};
export default NewsModel;
