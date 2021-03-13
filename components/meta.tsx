import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@lib/constants'

export type MetaProps = {}

export default function Meta({}: MetaProps) {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png" />
      <link rel="icon" type="image/png" sizes="256x256" href="/favicon/favicon-256x256.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#fff" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="msapplication-TileColor" content="#28a745" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={`A statically generated blog example using Next.js and ${CMS_NAME}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}