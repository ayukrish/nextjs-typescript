import Link from 'next/link';
import { tabItems } from './constants';
import styles from '../../styles/tabs.module.scss';

const GetTabItems = () => {
  return (
    tabItems &&
    tabItems.map((item) => (
      <div
        key={item.id}
        className={`${styles.tab}`}
      >
        <Link href={item.routePath}>{item.name}</Link>
      </div>
    ))
  );
};


const Tabs = () => {
  return (
    <section className={styles.tabWrapper}>{GetTabItems()}</section>
  )
}

export default Tabs