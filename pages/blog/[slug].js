import Head from "next/head";

export default function BlogPage({ headline, date, body }) {
  return (
    <div>
      <Head>
        <title> {headline} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{headline} </h1>
      </main>
    </div>
  );
}
