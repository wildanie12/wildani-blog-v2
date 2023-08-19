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
import Head from "next/head"
import Image from "next/image"
import { posts } from "../data/posts"
import { tags } from "../data/tags"
import { categories } from "../data/categories"

type HomeProps = {
  posts: IPost[]
  tags: ITag[]
  categories: ICategory[]
  featuredPosts: IPost[]
  featuredTags: ITag[]
}

const metadata = {
  title: "Wildani Blog",
  description:
    "Membahas semuanya tentang web engineering dari level intermediate ke advanced, merupakan blog pribadi berisi catatan-catatan dari penulis tentang personal journey ataupun pengetahuan yang berkaitan dengan dunia teknologi informasi",
  banner: "/banner-blog.jpg"
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
        <title>Wildani Blog - Homepage</title>

        <meta name="title" content="Wildani Blog - Homepage" />
        <meta name="description" content={metadata.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_HOST} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.banner} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_HOST} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.banner} />
      </Head>
      <div className="w-full overflow-x-clip">
        <Header navbarData={navbarData} />
        <div className="relative pt-8 w-full pb-8">
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>

          <div className="relative container p-4 lg:p-0 mx-auto flex flex-col items-center justify-start">
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s] delay-500" : "opacity-0"
              } lg:block w-[64px] lg:w-[132px] top-[calc(50%-48px)] lg:top-1/4 left-0 -z-10 lg:-translate-x-1/2 rotate-45 aspect-square bg-wdYellow absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-30 transition-opacity duration-[4s] delay-100" : "opacity-0"
              } lg:block w-[64px] lg:w-[183px] top-[calc(50%-48px)] lg:top-[calc(25%+72px)] -left-[72px] -z-10 lg:-translate-x-1/2 aspect-square absolute`}
            >
              <Image src="/404-decoration.svg" alt="404-decoration" fill={true}></Image>
            </div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } hidden lg:block w-[64px] top-[calc(25%+180px)] left-0 -z-10 rotate-45 aspect-square bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s] delay-500" : "opacity-0"
              } hidden lg:block w-[132px] h-[16px] bottom-0 left-0 -z-10 -translate-x-1/2 -rotate-45 bg-wdYellow absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s] delay-1000" : "opacity-0"
              } lg:block w-[240px] h-[36px] -bottom-[16px] -left-[56px] -z-10 -translate-x-1/2 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-30 transition-opacity duration-[3s] delay-500" : "opacity-0"
              } lg:block w-[230px] h-[212px] -bottom-[40px] -left-[80px] -z-10 -translate-x-1/2 absolute`}
            >
              <Image src="/swarm-decoration.svg" alt="docker-decoration" fill={true}></Image>
            </div>

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
              } lg:block w-[200px] h-[150px] top-3/4 lg:top-[calc(50%-48px)] -translate-y-full -right-[172px] -z-10 absolute`}
            >
              <Image src="/rest-decoration.svg" alt="docker-decoration" fill={true}></Image>
            </div>

            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[56px] aspect-square top-[calc(75%+28px)] lg:top-[calc(50%+28px)] -right-[8px] -z-10 -rotate-45 bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[56px] aspect-square top-[calc(75%+28px)] lg:top-[calc(50%+42px)] -right-[22px] -z-10 -rotate-45 bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0"
              } lg:block w-[180px] aspect-square top-[calc(75%+28px)] lg:top-[calc(50%-104px)] -right-[182px] -z-10 -rotate-4 absolute`}
            >
              <Image src="/grpc-decoration.svg" alt="docker-decoration" fill={true}></Image>
            </div>
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
  // const client = new ApolloClient({
  //   uri: process.env.CMS_API_URL,
  //   cache: new InMemoryCache()
  // })

  // // fetch latest posts
  // const res = await client.query({
  //   query: GET_LATEST_POST,
  //   variables: {
  //     page: 1,
  //     pageSize: 10
  //   }
  // })
  // const posts = res.data.posts.data as IPost[]
  const dataPosts: IPost[] = posts

  // // fetch tags
  // const res2 = await client.query({
  //   query: GET_TAGS
  // })
  // const tags = res2.data.tags.data as ITag[]
  const dataTags: ITag[] = Object.keys(tags).map((key) => tags[key])

  // // fetch categories
  // const res3 = await client.query({
  //   query: GET_CATEGORIES
  // })
  // const categories = res3.data.categories.data as ICategory[]
  const dataCategories: ICategory[] = Object.keys(categories).map((key) => categories[key])

  // // fetch featured posts
  // const res4 = await client.query({
  //   query: GET_FEATURED_POSTS
  // })
  // const featuredPosts = res4.data.featuredPost.data.attributes.posts.data as IPost[]
  const featuredPosts: IPost[] = [posts[2], posts[0], posts[1]]

  // // fetch featured tags
  // const res5 = await client.query({
  //   query: GET_FEATURED_TAGS
  // })
  // const featuredTags = res5.data.featuredTag.data.attributes.tags.data as ITag[]
  const featuredTags: ITag[] = Object.keys(tags).map((key) => tags[key])

  return {
    props: {
      posts: dataPosts,
      tags: dataTags,
      categories: dataCategories,
      featuredPosts,
      featuredTags
    }
  }
}

export default Home
