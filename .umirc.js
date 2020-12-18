// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  //   routes: [
  //     {
  //       path: '/',
  //       component: '../layouts/index',
  //       routes: [{ path: '/', component: '../pages/index' }],
  //     },
  //   ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'dva-demo',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://gy.jvlihd.com/home/main/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  history: 'hash',
  sass: {}, ///配这里
};
