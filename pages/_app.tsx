import "../styles/globals.css"
import type { AppProps } from "next/app"
import ThemeContextProvider from "../providers/ThemeProvider"
import { useEffect } from "react"

import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import SearchProvider from "../providers/SearchProvider"

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore"
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    }
  }
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
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </ThemeContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
