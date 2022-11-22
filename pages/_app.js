import "../styles/globals.css";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="flex justify-between px-10 py-4 shadow-md ">
        <div>
          <span className=" text-red-600 font-bold">CamMovie</span>
        </div>
        <div className="flex gap-4">
          <Link href="/">
            <span>Store</span>
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
