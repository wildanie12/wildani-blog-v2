import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Post from "../../components/post/Post"
import SideTag, { SideTagData } from "../../components/sidebar/SideTag"
import { Tag } from "../../components/sidebar/Tags"

import { navbarData } from "../../constants/menu"
import { GET_FEATURED_TAGS, GET_POSTS_BY_TAG, GET_TAGS_BY_SLUG, GET_TAG_SLUGS } from "../../helpers/apollo_query"
import { tags } from "../../data/tags"
import { posts } from "../../data/posts"

type TagPostsProps = {
  posts: IPost[]
  tag: ITag
  featuredTags: ITag[]
}

export default function PostByCategory({ posts = [], tag, featuredTags }: TagPostsProps): JSX.Element {
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
        <title>Post with category {tag.attributes.name} - Wildani Blog</title>
        <meta name="title" content={`Post(s) tagged with ${tag.attributes.name} - Wildani Blog`} />
        <meta
          name="description"
          content={`Found ${posts.length} post(s) with tagged with ${tag.attributes.name}, navigate to the website and explore all available articles.`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_HOST + "/tags/" + tag.attributes.slug} />
        <meta property="og:title" content={`Post(s) tagged with ${tag.attributes.name} - Wildani Blog`} />
        <meta
          property="og:description"
          content={`Found ${posts.length} post(s) with tagged with ${tag.attributes.name}, navigate to the website and explore all available articles.`}
        />
        <meta property="og:image" content={`/public/banner-blog.jpg`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_HOST + "/tags/" + tag.attributes.slug} />
        <meta property="twitter:title" content={`Post(s) tagged with ${tag.attributes.name} - Wildani Blog`} />
        <meta
          property="twitter:description"
          content={`Found ${posts.length} post(s) with tagged with ${tag.attributes.name}, navigate to the website and explore all available articles.`}
        />
        <meta property="twitter:image" content={`/public/banner-blog.jpg`} />
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
              <Tag name={tag.attributes.name} link={`/tags/${tag.attributes.slug}`} />
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

  // // fetch categories
  // const res = await client.query({
  //   query: GET_TAG_SLUGS
  // })
  // const tags = res.data.tags.data as ITag[]
  // if (!tags) return { paths: [], fallback: false }

  const dataTags = Object.keys(tags).map((key) => tags[key])
  const paths = dataTags.map((tag) => ({ params: { slug: tag.attributes.slug } }))
  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps<TagPostsProps> = async (context) => {
  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   uri: process.env.CMS_API_URL
  // })

  // // fetch category by slug
  // const res = await client.query({
  //   query: GET_TAGS_BY_SLUG,
  //   variables: {
  //     slug: context.params!.slug
  //   }
  // })
  // if (!res.data.tags.data) {
  //   return { notFound: true }
  // }
  // const tags = res.data.tags.data as ITag[]
  const dataTags = Object.keys(tags)
    .map((key) => tags[key])
    .filter((tag) => tag.attributes.slug == context.params!.slug)
  if (dataTags.length == 0) {
    return {
      notFound: true
    }
  }
  const dataTag = dataTags[0]

  // // fetch posts by category
  // const res2 = await client.query({
  //   query: GET_POSTS_BY_TAG,
  //   variables: {
  //     slug: context.params!.slug
  //   }
  // })
  // const posts = res2.data.posts.data as IPost[]
  const dataPosts: IPost[] = posts.filter((post) => {
    const postTags = post.attributes.tags.data
    const validTags = postTags.filter((tag) => tag.id == dataTag.id)
    if (validTags.length > 0) return true
    return false
  })

  // // fetch featured tags
  // const res3 = await client.query({
  //   query: GET_FEATURED_TAGS
  // })
  // const featuredTags = res3.data.featuredTag.data.attributes.tags.data as ITag[]
  const featuredTags: ITag[] = Object.keys(tags).map((key) => tags[key])

  return {
    props: {
      posts: dataPosts,
      tag: dataTag,
      featuredTags
    }
  }
}
