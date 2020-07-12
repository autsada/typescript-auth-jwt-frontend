import React from 'react'
import { AppProps } from 'next/app'

import Layout from '../components/Layout'
import AuthContextProvider from '../context/AuthContextProvider'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

export default App
