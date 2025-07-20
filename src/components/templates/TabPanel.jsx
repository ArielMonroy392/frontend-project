import { useState, useMemo } from 'react';

export default function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const ActiveTab = useMemo(() => {
    return tabs.find(tab => tab.name === activeTab);
  }, [activeTab, tabs]);

  return (
    <div>
      <div className="tabs">
        {tabs.map(({ name }) => (
          <button
            key={name}
            className={`tab ${activeTab === name ? 'active' : ''}`}
            onClick={() => setActiveTab(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {ActiveTab?.component(ActiveTab.props || {})}
      </div>
    </div>
  );
}
