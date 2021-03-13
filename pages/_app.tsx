import { DefaultSeo } from 'next-seo'

// import your default seo configuration
import SEO from '../next-seo.config'

import '@scss/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
