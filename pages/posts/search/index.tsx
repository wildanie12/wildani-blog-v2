import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client"
import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import Post from "../../../components/post/Post"
import SideTag, { SideTagData } from "../../../components/sidebar/SideTag"
import { Tag } from "../../../components/sidebar/Tags"
import { navbarData } from "../../../constants/menu"
import { GET_FEATURED_TAGS, SEARCH_POSTS } from "../../../helpers/apollo_query"

import { useRouter } from "next/router"
import Image from "next/image"

type SearchProps = {
  featuredTags?: ITag[]
  posts?: IPost[]
}

const Search: NextPage<SearchProps> = ({ featuredTags = [], posts = [] }) => {
  let sideTags: SideTagData[] = []
  featuredTags.map((tag) => {
    sideTags.push({
      icon: <img src={`${process.env.NEXT_PUBLIC_ASSET_URL}${tag.attributes.icon_svg}`}></img>,
      link: `/tags/${tag.attributes.slug}`,
      name: tag.attributes.name
    })
  })

  // fetch posts query
  const router = useRouter()
  const { loading, error, data } = useQuery(SEARCH_POSTS, {
    variables: {
      query: router.query.q
    }
  })

  if (typeof data?.posts?.data !== "undefined") {
    posts = data.posts.data as IPost[]
  }

  return (
    <>
      <Head>
        <title>Post with category - Wildani Blog</title>
      </Head>
      <div className="w-full pb-6 overflow-x-hidden">
        <Header navbarData={navbarData} />
        <div className="relative pt-8 w-full">
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>
        </div>

        <div className="container px-6 lg:px-0 flex flex-col lg:flex-row gap-8 justify-start items-start mb-8">
          <SideTag className="w-full lg:w-8" tags={sideTags} />
          <div className="w-full">
            <div className="flex gap-2 items-center mb-2">
              <h4 className="uppercase font-semibold tracking-wide font-poppins text-gray-400 text-sm">Posts with keyword:</h4>
              <Tag name={router.query.q as string} link="#" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {loading ? (
                <div className="lg:col-span-3 sm:col-span-2 col-span-1">
                  <div className="w-32 h-32  m-auto relative overflow-hidden">
                    <Image loading="lazy" src="/loading.svg" fill={true} style={{ objectFit: "cover" }} alt="loading" />
                  </div>
                </div>
              ) : (
                <>
                  {posts.map((post, i) => (
                    <Post post={post} key={i} />
                  ))}
                </>
              )}
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<SearchProps> = async (context) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.CMS_API_URL
  })

  // fetch featured tags
  const res = await client.query({
    query: GET_FEATURED_TAGS
  })
  const featuredTags = res.data.featuredTag.data.attributes.tags.data as ITag[]

  return {
    props: {
      featuredTags
    }
  }
}

export default Search