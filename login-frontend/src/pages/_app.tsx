import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}
export default MyApp
