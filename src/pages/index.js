import styles from './index.css';
import { Button } from 'antd';
import Link from 'umi/link';
export default function() {
  return (
    <div className={styles.container}>
      <div type="default" value="large">
        <Link to={`/products/1`}>个人理财</Link>
      </div>
      <div type="default" value="large">
        <Link to={`/products/2`}>法人理财</Link>
      </div>
      <div>
        <Link to={`/hooks`}>hooks简介</Link>
      </div>
      <div>
        <Link to={`/smzq`}>react生命周期简介-class组件中的父子通信</Link>
      </div>
    </div>
  );
}
