import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Blog Next.js and Tailwind </h1>
      </main>

      <div>
        {blogPosts.map((item) => (
          <div key={item.headline}>
            <div>
              <Link href={`blog/${item.slug}`}>
                <a>{item.headline}</a>
              </Link>
            </div>
            <div>{item.date.toString()}</div>
            <div>{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
