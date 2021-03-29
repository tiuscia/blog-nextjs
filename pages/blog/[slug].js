import Head from "next/head";
import { format, parseISO } from "date-fns";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ headline, date, body }) {
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
        <div>{body}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("slug.js context", context);
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
