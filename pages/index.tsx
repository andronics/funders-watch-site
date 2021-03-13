import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Layout from '@components/layout'

import styles from '@scss/pages/home.module.scss'

export type HomeProps = {}

export default function Home({}: HomeProps) {
  
  return (
  
    <>
      
      <NextSeo title="Home"/>
      
      <Layout preview={null}>
        
        <div className={styles.container}>
        
          <main className={styles.main}>
            
            <h1 className={styles.title}>
              Welcome to our <a href="#">Home</a> page.
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.tsx</code>
            </p>

            <Image alt="" src="/images/07.svg" width="500" height="500" />


          </main>

        </div>

      </Layout>
    
    </>
  
  )

}
