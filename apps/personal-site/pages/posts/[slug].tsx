import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function Post({ frontmatter, content }) {
  return (
    <div className="flex justify-center p-12">
      <div className="w-full max-w-screen-md">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(
    path.join(__dirname, '../../../../public/posts')
  );

  const paths = files.map((file) => ({
    params: { slug: file.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(
    path.join(__dirname, `../../../../public/posts/${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
