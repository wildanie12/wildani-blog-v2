import "../styles/globals.css"
import type { AppProps } from "next/app"
import ThemeContextProvider from "../providers/ThemeProvider"
import { useEffect } from "react"

import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start()
    }
    const handleRouteDone = () => NProgress.done()

    router.events.on("routeChangeStart", handleRouteStart)
    router.events.on("routeChangeComplete", handleRouteDone)
    router.events.on("routeChangeError", handleRouteDone)

    return () => {
      router.events.off("routeChangeStart", handleRouteStart)
      router.events.off("routeChangeComplete", handleRouteDone)
      router.events.off("routeChangeError", handleRouteDone)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
