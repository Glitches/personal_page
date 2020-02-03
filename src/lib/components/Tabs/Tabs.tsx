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
    const [selectedState, setSelected] = React.useState('home')
    const selectedRef = React.useRef<HTMLDivElement>(null)
    const width = selectedRef.current ? selectedRef.current.offsetWidth : '1rem'

    console.log(selectedRef.current ? selectedRef.current.getClientRects : null)
    return (
        <div className="tabs-line">
            <div className='tabs'>
                {
                    tabs.map((tab: TabType, index: number) => (
                        <>
                            <div
                                className={`tab-element ${selectedState === tab.label ? 'selected' : null}`}
                                key={index + tab.label}
                                ref={selectedState === tab.label ? selectedRef : null}
                                onClick={() => setSelected(tab.label)}
                            >
                                {tab.label}
                            </div>
                        </>
                    ))
                }
            </div>
            <div className="tab-element-selected" style={{ width: width }} />
        </div>
    )
}
