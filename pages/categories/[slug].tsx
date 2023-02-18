import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Post from "../../components/post/Post"
import SideTag, { SideTagData } from "../../components/sidebar/SideTag"
import { Tag } from "../../components/sidebar/Tags"

import { navbarData } from "../../constants/menu"
import { GET_CATEGORY_BY_SLUG, GET_CATEGORY_SLUGS, GET_FEATURED_TAGS, GET_POSTS_BY_CATEGORY, GET_TAGS } from "../../helpers/apollo_query"

type CategoryPostsProps = {
  posts: IPost[]
  category: ICategory
  featuredTags: ITag[]
}

export default function PostByCategory({ posts = [], category, featuredTags = [] }: CategoryPostsProps): JSX.Element {
  let sideTags: SideTagData[] = []
  featuredTags.map((tag) => {
    sideTags.push({
      icon: <img src={`${process.env.NEXT_PUBLIC_ASSET_URL}${tag.attributes.icon_svg}`}></img>,
      link: `/tags/${tag.attributes.slug}`,
      name: tag.attributes.name
    })
  })

  return (
    <>
      <Head>
        <title>Post with category {category.attributes.title} - Wildani Blog</title>
      </Head>
      <div className="w-full pb-6 overflow-x-clip">
        <Header navbarData={navbarData} />
        <div className="relative pt-8 w-full">
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>
        </div>

        <div className="container px-6 lg:px-0 flex flex-col lg:flex-row gap-8 justify-start items-start mb-8">
          <SideTag className="w-full lg:w-8" tags={sideTags} />
          <div className="w-full">
            <div className="flex gap-2 items-center mb-2">
              <h4 className="uppercase font-semibold tracking-wide font-poppins text-gray-400 text-sm">Posts With</h4>
              <Tag name={category.attributes.title} link={`/tags/${category.attributes.slug}`} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {posts.map((post, i) => (
                <Post post={post} key={i} />
              ))}
            </div>
            {posts.length == 0 && (
              <div className="col-span-1 lg:col-span-3 flex justify-center">
                <div className="flex flex-col gap-5 p-6 rounded-3xl border-2 border-gray-400 border-opacity-25">
                  <div className="text-5xl text-center dark:opacity-100 opacity-50">☝️😅</div>
                  <div className="text-2xl text-gray-400 font-firaCode uppercase font-semibold tracking-widest opacity-50 text-center">No Post</div>
                </div>
              </div>
            )}
            {/* <Pagination /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.CMS_API_URL
  })

  // fetch categories
  const res = await client.query({
    query: GET_CATEGORY_SLUGS
  })
  const categories = res.data.categories.data as ICategory[]

  const paths = categories.map((category) => ({ params: { slug: category.attributes.slug } }))

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps<CategoryPostsProps> = async (context) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.CMS_API_URL
  })

  // fetch category by slug
  const res = await client.query({
    query: GET_CATEGORY_BY_SLUG,
    variables: {
      slug: context.params!.slug
    }
  })
  const categories = res.data.categories.data as ICategory[]
  if (categories.length == 0) {
    return {
      notFound: true
    }
  }
  const category = categories[0]

  // fetch posts by category
  const res2 = await client.query({
    query: GET_POSTS_BY_CATEGORY,
    variables: {
      slug: context.params!.slug
    }
  })
  const posts = res2.data.posts.data as IPost[]

  // fetch featured tags
  const res3 = await client.query({
    query: GET_FEATURED_TAGS
  })
  const featuredTags = res3.data.featuredTag.data.attributes.tags.data as ITag[]

  return {
    props: {
      posts,
      category,
      featuredTags
    }
  }
}
