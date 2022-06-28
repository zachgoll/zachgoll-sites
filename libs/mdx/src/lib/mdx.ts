import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { z } from 'zod';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export const POSTS_PATH = join(process.cwd(), './apps/personal-site/posts');

export const POSTS_LIST = readdirSync(POSTS_PATH).filter((path) =>
  /\.mdx?$/.test(path)
);

const frontMatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  published_date: z.string(),
  excerpt: z.string().optional(),
  youtube_video_urls: z.string().array().optional(),
  tags: z.string().array().optional(),
  category: z.string(),
});

export type FrontMatter = {
  data: z.infer<typeof frontMatterSchema>;
  content: string;
};

export function getFrontMatter(filename: string): FrontMatter {
  const fileContents = readFileSync(join(POSTS_PATH, filename));
  const { data, content } = matter(fileContents);
  return { data: frontMatterSchema.parse(data), content };
}

export type PostMDX = {
  mdx: MDXRemoteSerializeResult;
  frontmatter: FrontMatter;
};
