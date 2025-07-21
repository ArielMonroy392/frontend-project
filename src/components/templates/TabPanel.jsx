import { useState, useMemo } from 'react';
import './TabPanel.css';

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
            className={`tab-button ${activeTab === name ? 'active' : ''}`}
            onClick={() => setActiveTab(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div key={activeTab} className="tab-content tab-panel-animation">
        {ActiveTab?.component(ActiveTab.props || {})}
      </div>
    </div>
  );
}
