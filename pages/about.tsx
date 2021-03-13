import Head from 'next/head'
import styles from '@scss/pages/home.module.scss'

export type AboutPageProps = {}

export default function AboutPage({}: AboutPageProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}