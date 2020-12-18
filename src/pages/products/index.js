import { connect } from 'dva';
const Products = props => {
  //   console.log(props);
  return <div>我产品列表子页面</div>;
};

export default connect(({ products }) => {
  return { proList: products.products };
})(Products);
