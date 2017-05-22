import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link
      as={`/p/${props.id}`}
      href={`/post?title=${props.title}`}
    >
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id='hello-next' title='Hello Next.js' />
      <PostLink id='next-is-tight' title='Next.js is Tight' />
      <PostLink id='deploy-with-beezy' title='Deploy apps with Beezy' />
    </ul>
  </Layout>
)
