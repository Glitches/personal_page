import * as React from 'react'
import { Layout } from '../lib/components/Layout/Layout'
import { Header } from '../lib/components/Header'
import { Title } from '../lib/components/Title'
import { Tabs } from '../lib/components/Tabs'

export const Wrapper = ({ children }) => (
    <Layout maxWidth={85}>
        <Header display="sticky">
            <Title label="Code? Yes, Code!" />
        </Header>
        <Tabs tabs={[
            {
                label: 'home',
                selected: true,
                href: '/home'
            },
            {
                label: 'blog',
                selected: false,
                href: '/blog'
            },
            {
                label: 'about',
                selected: false,
                href: '/about'
            },
        ]} />
        <div className="body-content">
            {children}
        </div>
    </Layout>
)