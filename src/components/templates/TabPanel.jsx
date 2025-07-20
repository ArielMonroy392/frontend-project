import {useState} from "react";

export default function TabPanel({ components, names }) {
    const [activeTab, setActiveTab] = useState(names[0]);
    return (
        <div>
            <div className="tabs">
                {names.map((name) => (
                    <button
                        key={name}
                        className={`tab ${activeTab === name ? "active" : ""}`}
                        onClick={() => setActiveTab(name)}
                    >
                        {name}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {components[names.indexOf(activeTab)]}
            </div>
        </div>
    )

}