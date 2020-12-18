import styles from '../assets/css/style.scss';
// import styles from './index.css';
console.log(styles);
function BasicLayout(props) {
  return <div className={styles.app}>{props.children}</div>;
}

export default BasicLayout;
