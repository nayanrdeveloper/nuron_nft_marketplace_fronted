import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
