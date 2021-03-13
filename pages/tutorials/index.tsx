
import { NextSeo } from 'next-seo';

import Layout from '@components/layout'

import styles from '@scss/pages/home.module.scss'


export type TutorialsProps = {
    post: any[]
}

export default function Tutorials({}: TutorialsProps) {

  return (
  
    <>
      
      <NextSeo title="Tutorials"/>
      
      <Layout preview={null}>
        
        <div className={styles.container}>
        
          <main className={styles.main}>
            
            <h1 className={styles.title}>
              Welcome to our <a href="#">Tutorials</a> page.
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/tutorials/index.tsx</code>
            </p>

          </main>

        </div>

      </Layout>
    
    </>
  
  )

}


// export async function getStaticPaths() {
//     const posts = await getBlogPosts()
//     return {
//         paths: posts.map(post => `/blog/${post.slug}`) || [],
//         fallback: true
//     }
// }

// export async function getStaticProps({ params, preview = null }) {
//     const { posts, morePosts } = await getBlogPostsWithPagination()
//     const content = posts[0]?.content || ''
//     return {
//         props: {
//             preview,
//             post: {
//                 ...posts[0],
//                 content
//             },
//             morePosts
//         }
//     }
// }