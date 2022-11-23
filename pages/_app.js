import "../styles/globals.css";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="flex justify-between px-10 py-4 shadow-md ">
        <div>
          <Link href="/">
            <span className=" text-blue-600 font-bold text-2xl">
              ChhayMovie
            </span>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/">
            <span>Movie</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
        </div>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
