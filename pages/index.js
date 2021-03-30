import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllPosts } from "../lib/data.js";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title> Blog Page Title </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, headline, date, content }) {
  return (
    <div className="border rounded border-gray-300 my-4 p-4 hover:border-gray-500 transition duration-175 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{headline}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}
