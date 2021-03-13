import Head from 'next/head'
import styles from '@scss/pages/user.module.scss'

export type UserPageProps = {}

export default function UserPage({}: UserPageProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
