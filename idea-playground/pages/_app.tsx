import '../styles/globals.css'
import '../styles/buttonStyles.css'
import '../styles/inputStyles.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
