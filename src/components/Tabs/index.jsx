import React from 'react'
import s from './index.module.css'
import Tab from './Tab'

export default function Tabs({ 
    tabs=[], 
    renderTabContent, 
    tab, 
    setTab,
    vertical=false 
}) {

    const template = vertical ? {
        display: 'flex',
        flexDirection: 'row'
    } : {
        display: 'flex',
        flexDirection: 'column'
    }

    const tabTemplate = vertical ? {
        display: 'flex',
        flexDirection: 'column'
    } : {
        display: 'flex',
        flexDirection: 'row'
    }

  return (
    <div style={template}>
        <div className={s.tabs} style={tabTemplate}>
            {
                tabs.map((item, index) => {
                    return (
                        <Tab 
                            key={index}
                            item={item} 
                            tab={tab} 
                            setTab={setTab} 
                            active={tab===item.value}
                            vertical={vertical}
                        />
                    )
                })
            }
            
        </div>
        <div className={s.content}>
            {
                renderTabContent()
            }
        </div>
    </div>
  )
}
