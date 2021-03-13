import { ReactNode } from 'react'

import Footer from './footer'
import Header from './header'
import Meta from './meta'

export type LayoutProps = {
    children?: ReactNode,
    preview: any
}

export default function Layout({ preview, children }: LayoutProps) {
    return (
        <>
            <Meta />
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}