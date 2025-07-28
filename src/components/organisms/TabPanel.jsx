import { useState, useMemo, Suspense } from 'react';
import styles from './TabPanel.module.css';
import TabButton from '../atoms/TabButton.jsx';
import PokemonLoader from '../atoms/PokeballLoader.jsx';

export default function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const ActiveTab = useMemo(() => {
    return tabs.find(tab => tab.name === activeTab);
  }, [activeTab, tabs]);

  const Component = ActiveTab?.component;
  const props = ActiveTab?.props || {};

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map(({ name }) => (
          <TabButton
            key={name}
            name={name}
            onClick={() => setActiveTab(name)}
            active={activeTab === name}
          />
        ))}
      </div>

      <div
        key={activeTab}
        className={`${styles.tabContent} ${styles.tabPanelAnimation}`}
      >
        <Suspense fallback={<PokemonLoader />}>
          {Component && <Component {...props} />}
        </Suspense>
      </div>
    </div>
  );
}
