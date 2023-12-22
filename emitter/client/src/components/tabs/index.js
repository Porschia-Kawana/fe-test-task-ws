import "./index.scss";
import React, { useEffect, useState } from "react";

function Tabs(props) {
    const [tabs, setTabs] = useState(props.tabs)
    const [activeContent, setContent] = useState()

    function clickTab(activeTab) {
        let updateActiveTab = tabs.map(tab => {
            if (tab.label === activeTab.label) tab.active = true
            else tab.active = false
            return tab
        })
        setTabs(updateActiveTab)
    }

    useEffect(() => {
        const activeTabIdx = tabs.findIndex(tab => tab.active)
        setContent(props.children[activeTabIdx])
    }, [tabs])

    return (
        <>
            <div className="tabs__container">
                {tabs.map((tab) => (
                    <div key={tab.label} className={`tabs__button ${tab.active ? "tabs__button--active" : ""}`}><button onClick={() => clickTab(tab)}>{tab.label}</button></div>
                ))}
            </div>
            <div className="tabs__content">{activeContent}</div>
        </>
    );
}

export default Tabs;