import type { GetStaticProps, NextPage } from "next"
import { useContext } from "react"
import Featured from "../components/featured"
import Header from "../components/header"
import Posts from "../components/post"
import Sidebar from "../components/sidebar"
import { ThemeContext } from "../providers/ThemeProvider"

import { navbarData } from "../constants/menu"
import Footer from "../components/footer"
import SideTag, { SideTagData } from "../components/sidebar/SideTag"
import Categories from "../components/sidebar/Categories"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_CATEGORIES, GET_FEATURED_POSTS, GET_FEATURED_TAGS, GET_LATEST_POST, GET_TAGS } from "../helpers/apollo_query"
import Head from "next/head"
import Image from "next/image"

type HomeProps = {
  posts: IPost[]
  tags: ITag[]
  categories: ICategory[]
  featuredPosts: IPost[]
  featuredTags: ITag[]
}

const Home: NextPage<HomeProps> = ({ posts, tags, categories, featuredPosts = [], featuredTags = [] }) => {
  const { isDark } = useContext(ThemeContext)

  let sideTags: SideTagData[] = []
  featuredTags.map((tag) => {
    sideTags.push({
      icon: <Image alt="" fill={true} src={`${process.env.NEXT_PUBLIC_ASSET_URL}${tag.attributes.icon_svg}`}></Image>,
      link: `/tags/${tag.attributes.slug}`,
      name: tag.attributes.name
    })
  })

  return (
    <>
      <Head>
        <title>Homepage - Wildani Blog</title>
      </Head>
      <div className="w-full overflow-x-hidden">
        <Header navbarData={navbarData} />
        <div className="relative pt-8 w-full pb-8">
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>

          <div className="relative container p-4 lg:p-0 mx-auto flex flex-col items-center justify-start">
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[64px] lg:w-[132px] top-[calc(50%-48px)] lg:top-1/4 left-0 -z-10 lg:-translate-x-1/2 rotate-45 aspect-square bg-wdYellow absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } hidden lg:block w-[64px] top-[calc(25%+180px)] left-0 -z-10 rotate-45 aspect-square bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } hidden lg:block w-[132px] h-[16px] bottom-0 left-0 -z-10 -translate-x-1/2 -rotate-45 bg-wdYellow absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[240px] h-[36px] -bottom-[16px] -left-[56px] -z-10 -translate-x-1/2 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[64px] left-1/2 top-0 lg:-top-6 -translate-x-1/2 -z-10 rotate-45 aspect-square bg-wdRed absolute`}
            ></div>

            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[108px] h-[108px] top-3/4 lg:top-1/2 -translate-y-full -right-[56px] -z-10 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[56px] aspect-square top-[calc(75%+28px)] lg:top-[calc(50%+28px)] -right-[8px] -z-10 -rotate-45 bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[160px] h-[16px] top-0 right-0 translate-x-1/2 -z-10 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } hidden lg:block w-[160px] h-[16px] top-0 right-0 translate-x-1/2 -z-10 -rotate-45 bg-wdSky absolute`}
            ></div>

            <div
              className={`${
                isDark ? "opacity-20 lg:opacity-40 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[160px] aspect-square top-1/2 translate-y-1/4 rounded-full right-1/2 -z-10 bg-wdYellow absolute`}
            ></div>

            <div
              className={`${
                isDark ? "opacity-50 transition-opacity duration-[3s]" : "opacity-0"
              } hidden lg:block w-[160px] aspect-square top-1/4 left-3/4 -translate-y-1/2 rounded-full -z-10 bg-wdYellow absolute`}
            ></div>

            {/* Featured */}
            <Featured className="w-full" posts={featuredPosts} />
          </div>

          <div className="container px-4 mt-4 mb-8 lg:block">
            <div className="hidden w-full lg:flex justify-between items-start gap-6 mb-6  ">
              <Sidebar categories={categories} featuredTags={featuredTags} tags={tags} className="w-1/3" />
              <Posts className="w-2/3" posts={posts} />
            </div>
            <div className="lg:hidden flex flex-col gap-4">
              <SideTag tags={sideTags} className="p-4" />
              <Posts className="w-full" posts={posts} />
              <Categories categories={categories} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = new ApolloClient({
    uri: process.env.CMS_API_URL,
    cache: new InMemoryCache()
  })

  // fetch latest posts
  const res = await client.query({
    query: GET_LATEST_POST,
    variables: {
      page: 1,
      pageSize: 10
    }
  })
  const posts = res.data.posts.data as IPost[]

  // fetch tags
  const res2 = await client.query({
    query: GET_TAGS
  })
  const tags = res2.data.tags.data as ITag[]

  // fetch categories
  const res3 = await client.query({
    query: GET_CATEGORIES
  })
  const categories = res3.data.categories.data as ICategory[]

  // fetch featured posts
  const res4 = await client.query({
    query: GET_FEATURED_POSTS
  })
  const featuredPosts = res4.data.featuredPost.data.attributes.posts.data as IPost[]

  // fetch featured tags
  const res5 = await client.query({
    query: GET_FEATURED_TAGS
  })
  const featuredTags = res5.data.featuredTag.data.attributes.tags.data as ITag[]

  return {
    props: {
      posts,
      tags,
      categories,
      featuredPosts,
      featuredTags
    }
  }
}

export default Home
