// import Link from 'next/link'
import Head from 'next/head'
// import Script from 'next/script'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>Introduction</title>
        </Head>
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      {/* https://developers.facebook.com/docs/javascript/quickstart */}
        <h1>Introduction</h1>
        <p>
            Hi, <br/> My name is Selam! I created this blog with NextJS, a dope framework that is built on top of Node.js and enables React functionalities. <strong>So far, I like it!</strong> 
        </p>
            {/* <Link href="/">
            <a> Back to Home </a>
            </Link> */}
        </Layout>
    )
}