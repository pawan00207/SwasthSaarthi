import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </NextIntlProvider>
  )
}
