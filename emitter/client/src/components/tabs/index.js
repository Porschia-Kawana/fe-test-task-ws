import "./index.scss";
import React, { useEffect, useState } from "react";

function Tabs(props) {
    // If no props are passed the component will not be created
    if (!props.tabs) throw new Error('You must pass through props to Tabs component.');
    const [tabs, setTabs] = useState(props.tabs)
    const [activeContent, setContent] = useState()

    // When a tab is clicked it will update that button to be active while removing the active prop from the previous tab
    function clickTab(activeTab) {
        let updateActiveTab = tabs.map(tab => {
            if (tab.label === activeTab.label) tab.active = true
            else tab.active = false
            return tab
        })
        setTabs(updateActiveTab)
    }

    // When a tab is clicked it will find the appropriate content to match with the currently active tab via index
    useEffect(() => {
        const activeTabIdx = tabs.findIndex(tab => tab.active)
        if (props.children) setContent(props.children[activeTabIdx] || props.children[0])
    }, [tabs])

    return (
        <>
            <div className="tabs__container">
                {tabs.map((tab) => (
                    <div key={tab.label} className={`tabs__button ${tab.active ? "tabs__button--active" : ""}`}><button onClick={() => clickTab(tab)}>{tab.label}</button></div>
                ))}
            </div>
            {activeContent && <div className="tabs__content">{activeContent}</div>}
        </>
    );
}

export default Tabs;