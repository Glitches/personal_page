import * as React from 'react'
import './tabs.scss'

export type TabType = {
    label: string
    href: string
    selected: boolean
}

export interface Props {
    tabs: TabType[]
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
    return (
        <div className='tabs'>
            {
                tabs.map(tab => (
                    <div className={`tab-element ${tab.selected ? 'selected' : undefined}`}>
                        {tab.label}
                    </div>
                ))
            }
        </div>
    )
}
