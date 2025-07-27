import { useState, useMemo } from 'react';
import styles from './TabPanel.module.css';
import TabButton from '../atoms/TabButton.jsx';

export default function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const ActiveTab = useMemo(() => {
    return tabs.find(tab => tab.name === activeTab);
  }, [activeTab, tabs]);

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map(({ name }) => (
          <TabButton
            key={name}
            name={name}
            onClick={() => setActiveTab(name)}
          />
        ))}
      </div>

      <div
        key={activeTab}
        className={`${styles.tabContent} ${styles.tabPanelAnimation}`}
      >
        {ActiveTab?.component(ActiveTab.props || {})}
      </div>
    </div>
  );
}
