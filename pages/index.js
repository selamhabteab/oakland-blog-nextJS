import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Where you will find my takes on everything Oakland!</p>
        <p>
        Start with learning more about {' '}
        <Link href="/posts/first-post">
          <a>who I am!</a>
        </Link>
        </p>
        <p>
          And connect with me on {' '}
          <a href="https://www.linkedin.com/in/selamhabteab/" target="_blank"> LinkedIn! </a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Welcome to Oakland!</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   {console.log('file path is the fetched blog post id: '+id)}
            //   <br />
            //   <Date dateString={date} />
            // </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}