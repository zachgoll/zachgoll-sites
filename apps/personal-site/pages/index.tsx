import Link from 'next/link';
import { GetStaticProps } from 'next';
import { FrontMatter, getFrontMatter, POSTS_LIST } from '@zachgoll/mdx';
import { DateTime } from 'luxon';

export interface HomeProps {
  posts: FrontMatter[];
}

export function Home({ posts }: HomeProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-md">
        <h1>Zach Gollwitzer</h1>
        <ul className="list-none pl-0 flex items-center gap-4">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <h2>About me</h2>
        <p>
          Welcome to my online home! I'm a software engineer living in
          Cincinnati, OH with my wife Bethany. By day, I work at{' '}
          <a href="https://www.maybe.co">Maybe Finance</a> where we're building
          the next generation of personal finance tools. Outside of work, I
          really enjoy running and working out, reading long biographies and
          philosophy, and building all sorts of things whether that be software
          or doing some sort of home project.
        </p>
        <Link href="/about">[continue...]</Link>
        <h2>Recent posts</h2>
        <div className="my-4">
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.data.slug}>
                  <Link href={`/posts/${encodeURIComponent(post.data.slug)}`}>
                    <a>{post.data.title}</a>
                  </Link>
                  <span className="ml-2 text-xs text-gray-400">
                    {DateTime.fromISO(post.data.published_date).toFormat('DD')}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/posts">[all posts...]</Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Get 5 most recent posts
  const posts = POSTS_LIST.map(getFrontMatter)
    .sort(
      (p1, p2) =>
        new Date(p2.data.published_date).valueOf() -
        new Date(p1.data.published_date).valueOf()
    )
    .slice(0, 5);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
