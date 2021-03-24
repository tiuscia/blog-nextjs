import Head from "next/head";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ headline, date, body }) {
  return (
    <div>
      <Head>
        <title> {headline} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{headline} </h1>
        <div>{body}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("context", context);
  const { params } = context;

  return {
    props: blogPosts.find((item) => item.slug === params.slug), // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
