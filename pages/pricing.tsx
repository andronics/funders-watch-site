import { NextSeo } from 'next-seo';

import Layout from '@components/layout'

import styles from '@scss/pages/home.module.scss'

export type PricingProps = {}

export default function Pricing({}: PricingProps) {
  
  return (
  
    <>
      
      <NextSeo title="Pricing"/>
      
      <Layout preview={null}>
        
        <div className={styles.container}>
        
          <main className={styles.main}>
            
            <h1 className={styles.title}>
              Welcome to our <a href="#">Pricing</a> page.
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/pricing.tsx</code>
            </p>

          </main>

        </div>

      </Layout>
    
    </>
  
  )

}
