import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] })

function MyApp({ Component, pageProps }) {
  return( 
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
