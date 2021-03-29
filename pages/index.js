import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { blogPosts } from "../lib/data.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Blog Page Title </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {blogPosts.map((item) => (
          <ListBlogItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function ListBlogItem({ slug, headline, body, date }) {
  return (
    <div className="border rounded border-gray-300 my-4 p-4 hover:border-gray-500 transition duration-175 ease-in">
      <div>
        <Link href={`blog/${slug}`}>
          <a className="text-lg">{headline}</a>
        </Link>
      </div>
      <div>{format(parseISO(date), "MMMM do, uuu")}</div>
      <div>{body}</div>
    </div>
  );
}
