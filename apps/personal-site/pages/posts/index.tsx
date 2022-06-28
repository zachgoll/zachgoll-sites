import Link from 'next/link';
import { GetStaticProps } from 'next';
import { FrontMatter, getFrontMatter, POSTS_LIST } from '@zachgoll/mdx';
import { Badge } from '@zachgoll/design-system';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { uniq, intersection } from 'lodash';
import { DateTime } from 'luxon';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

export interface PostsProps {
  posts: FrontMatter[];
}

const categories = [
  { name: 'all', display: 'All' },
  { name: 'software', display: 'Software' },
  { name: 'other', display: 'Other' },
];

const getCategoryName = (index: number) => {
  return categories[index].name;
};

export function PostsPage({ posts }: PostsProps) {
  const [tags, setTags] = useState<string[]>([]);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const tagList = useMemo(
    () =>
      uniq(
        posts.flatMap((post) => {
          if (
            !post.data.tags ||
            (post.data.category &&
              post.data.category !== getCategoryName(selectedCategoryIndex))
          )
            return [];

          return post.data.tags;
        })
      ),
    [posts, selectedCategoryIndex]
  );

  useEffect(() => {
    setTags([]);
  }, [selectedCategoryIndex]);

  const getFilteredPosts = useCallback(() => {
    const category = getCategoryName(selectedCategoryIndex);

    const filtered = posts
      .filter(
        (post) => selectedCategoryIndex === 0 || post.data.category === category
      )
      .filter((post) => {
        if (tags.length === 0) return true;
        const postTags = post.data.tags ?? [];
        const intersect = intersection(postTags, tags);
        return intersect.length > 0;
      });

    return filtered;
  }, [tags, posts, selectedCategoryIndex]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-md">
        <Link href="/">
          <div className="flex items-center cursor-pointer hover:opacity-80">
            <BsArrowLeftShort className="w-6 h-6" />
            <span>Home</span>
          </div>
        </Link>
        <h1>Writing</h1>
        <Tab.Group
          selectedIndex={selectedCategoryIndex}
          onChange={setSelectedCategoryIndex}
        >
          <Tab.List>
            {categories.map((category) => {
              const isActive =
                getCategoryName(selectedCategoryIndex) === category.name;

              return (
                <Tab
                  value={category.name}
                  key={category.name}
                  className={classNames(
                    'mr-6 focus:ring-0 focus:outline-none',
                    isActive && 'font-semibold border-b-2 border-slate-300'
                  )}
                >
                  {category.display}
                </Tab>
              );
            })}
          </Tab.List>
        </Tab.Group>

        <div
          className={classNames(selectedCategoryIndex === 0 ? 'mt-2' : 'mt-6')}
        >
          {tagList.map((tag) => (
            <Badge
              key={tag}
              size="sm"
              className="mr-2"
              isActive={!!tags.find((t) => t === tag)}
              onClick={() => {
                setTags((prev) => {
                  const currentIndex = prev.findIndex((t) => t === tag);
                  if (currentIndex !== -1) {
                    return prev.filter((t) => t !== tag);
                  } else {
                    return [...prev, tag];
                  }
                });
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="my-6">
          <ul>
            {getFilteredPosts().map((post) => {
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
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  // Get 5 most recent posts
  const posts = POSTS_LIST.map(getFrontMatter).sort(
    (p1, p2) =>
      new Date(p2.data.published_date).valueOf() -
      new Date(p1.data.published_date).valueOf()
  );

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
