import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { tabItems } from './constants';
import styles from '../../styles/tabs.module.scss';

const GetTabItems = () => {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].id);
  const location = useRouter();

  const getActiveTab = (route: string) => {
    const index = tabItems.findIndex((item) => item.routePath === route);
    return index === -1 ? tabItems[0] : tabItems[index];
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const tabDetails = getActiveTab(currentPath);
    setSelectedTab(tabDetails.id);
  }, [location]);

  return tabItems.map((item) => (
    <div
      key={item.id}
      className={`${styles.tab} ${
        selectedTab === item.id ? styles.active : ''
      }`}
    >
      <Link href={item.routePath}>{item.name}</Link>
    </div>
  ));
};

const Tabs: React.FunctionComponent = () => (
  <section className={styles.tabWrapper}>{GetTabItems()}</section>
);

export default Tabs;
