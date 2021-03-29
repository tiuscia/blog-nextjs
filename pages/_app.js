import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  console.log("_app component>>>>>", Component);
  console.log("_app pageProps>>>>>>", pageProps);
  return (
    <div className="mx-auto w-9/12">
      <header>
        <h1 className="text-5xl font-extrabold text-center my-9">
          NextJs Blog testing
        </h1>
        <nav>
          <ul className="flex flex-row space-x-4 justify-center font-semibold">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
