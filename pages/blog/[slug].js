import Head from "next/head";
import { format, parseISO } from "date-fns";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { getAllPosts } from "../../lib/data";

export default function BlogPage({ headline, date, content }) {
  const hydratedContent = hydrate(content);
  return (
    <div>
      <Head>
        <title> {headline} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-semibold capitalize">{headline}</h1>
        <div className="font-light text-grey-200 text-xs mb-9">
          {format(parseISO(date), "MMMM do, uuu")}
        </div>
        <div className="prose">{hydratedContent}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
