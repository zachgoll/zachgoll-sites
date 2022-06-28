import {
  FrontMatter,
  getFrontMatter,
  PostMDX,
  POSTS_LIST,
} from '@zachgoll/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import html from 'remark-html';
import Link from 'next/link';
import rehypeHighlight from 'rehype-highlight';
import { BsArrowLeftShort } from 'react-icons/bs';

type PostProps = {
  post: PostMDX;
};

export default function Post({ post }: PostProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-md">
        <Link href="/posts">
          <div className="flex items-center cursor-pointer hover:opacity-80">
            <BsArrowLeftShort className="w-6 h-6" />
            <span>Posts</span>
          </div>
        </Link>
        <h1>{post.frontmatter.data.title}</h1>
        <MDXRemote {...post.mdx} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = POSTS_LIST.map(getFrontMatter).map((frontmatter) => ({
    params: { slug: frontmatter.data.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  let frontmatter: FrontMatter | undefined;

  const matchedFilename = POSTS_LIST.find((filename) => {
    frontmatter = getFrontMatter(filename);
    return params?.slug === frontmatter.data.slug;
  });

  if (!matchedFilename || !frontmatter) throw new Error('Could not find post');

  const mdx = await serialize(frontmatter.content, {
    mdxOptions: { remarkPlugins: [html], rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      post: {
        mdx,
        frontmatter,
      },
    },
  };
};
