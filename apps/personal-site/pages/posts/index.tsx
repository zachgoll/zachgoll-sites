import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export function PostsPage() {
  return (
    <div className="flex justify-center p-12">
      <div className="w-full max-w-screen-md">
        <h1 className="font-thin">Zach Gollwitzer</h1>
        {/* <h2>Recent posts</h2>
        <div className="my-4">
          {posts.map((post) => {
            return (
              <Link key={post.slug} href={`posts/${post.slug}`}>
                <a>{post.frontmatter.title}</a>
              </Link>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default PostsPage;

// export async function getStaticProps() {
//   const files = fs.readdirSync(path.join(__dirname, '../../../public/posts'));

//   const posts = files.map((fileName) => {
//     const slug = fileName.replace('.md', '');
//     const readFile = fs.readFileSync(
//       path.join(__dirname, `../../../public/posts/${fileName}`),
//       'utf-8'
//     );
//     const { data: frontmatter } = matter(readFile);

//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }
