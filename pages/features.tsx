import { NextSeo } from 'next-seo';

import Layout from '@components/layout'

import styles from '@scss/pages/home.module.scss'

export type FeaturesProps = {}

export default function Features({}: FeaturesProps) {
  
  return (
  
    <>
      
      <NextSeo title="Features"/>
      
      <Layout preview={null}>
        
        <div className={styles.container}>
        
          <main className={styles.main}>
            
            <h1 className={styles.title}>
              Welcome to our <a href="#">Features</a> page.
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/features.tsx</code>
            </p>

          </main>

        </div>

      </Layout>
    
    </>
  
  )

}
