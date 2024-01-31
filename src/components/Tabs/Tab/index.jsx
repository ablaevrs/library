import React from 'react'
import s from './index.module.css'

export default function Tab({ item, tab, setTab, active, vertical }) {

    const activeStyle = active ? {
        borderBottom: '0px',
        background: '#ffe926',
        color: '#000'
        
    } : {}

    const verticalStyle = vertical ? {
        width: '200px',
        borderRadius: '0px'
    } : {}

    return (
        <div 
            className={s.tab} 
            onClick={()=> setTab(item.value)}
            style={{...activeStyle, ...verticalStyle}}
        >
                {
                    item.label
                }
        </div>
    )
}
