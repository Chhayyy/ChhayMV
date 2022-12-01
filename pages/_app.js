import "../styles/globals.css";
import Link from "next/link";
import { FavoriteProvider } from "./store/favorite";
import FormikProvider from "../Context/formikProvider";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <FavoriteProvider>
        <nav className="flex justify-between px-10 py-4 shadow-md ">
          <div>
            <Link href="/">
              <span className=" text-blue-600 font-bold text-2xl">
                CHHAYMovie
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
            <Link href="/Favorite">
              <span>Favorite</span>
            </Link>
          </div>
        </nav>
        <FormikProvider>
          <Component {...pageProps} />
        </FormikProvider>
      </FavoriteProvider>
    </>
  );
}

export default MyApp;
