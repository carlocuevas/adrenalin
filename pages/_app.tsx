import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppProvider from '../modules/dashboard/Provider'
import React from 'react'
import MainLayout from '../components/Layout/Layout'

import { QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_REST_API

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <AppProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppProvider>
    </QueryClientProvider>
  )
}
export default MyApp
