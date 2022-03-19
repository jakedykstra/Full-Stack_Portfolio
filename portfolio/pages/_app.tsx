import '../styles/globals.css'
import { Navbar, Footer } from '../components'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
export default MyApp
