import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Footer from "../../components/footer"
import Header from "../../components/header"
import SideTag, { SideTagData } from "../../components/sidebar/SideTag"
import Tags from "../../components/sidebar/Tags"
import TableOfContent from "../../components/table_of_contents"

import { navbarData } from "../../constants/menu"

import { Epilogue } from "../../components/post_detail"
import RelatedPost from "../../components/post_detail/RelatedPost"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_POSTS_BY_CATEGORY, GET_POST_SLUGS, GET_SINGLE_POST } from "../../helpers/apollo_query"
import moment from "moment"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Head from "next/head"

const markdownItSrc = import("markdown-it")
const markdownItAnchorSrc = import("markdown-it-anchor")
const shikiSrc = import("shiki")

type PostDetailProps = {
  post: IPost
  parsedBody: string
  parsedEpilogue: string
  url: string
  relatedPosts: IPost[]
}

const sideTags: SideTagData[] = [
  {
    name: "Link",
    icon: (
      <svg className="w-full fill-inherit" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.2703 5.07369C21.6393 4.69165 22.0807 4.38693 22.5687 4.17729C23.0567 3.96765 23.5816 3.85731 24.1127 3.85269C24.6438 3.84808 25.1705 3.94928 25.6621 4.15041C26.1537 4.35153 26.6003 4.64854 26.9759 5.02412C27.3515 5.39969 27.6485 5.84629 27.8496 6.33788C28.0507 6.82946 28.1519 7.35618 28.1473 7.8873C28.1427 8.41842 28.0323 8.9433 27.8227 9.43131C27.6131 9.91933 27.3083 10.3607 26.9263 10.7297L20.9263 16.7297C20.1762 17.4796 19.159 17.9008 18.0983 17.9008C17.0376 17.9008 16.0204 17.4796 15.2703 16.7297C14.8931 16.3654 14.3879 16.1638 13.8635 16.1683C13.3391 16.1729 12.8375 16.3832 12.4667 16.7541C12.0959 17.1249 11.8855 17.6265 11.881 18.1509C11.8764 18.6753 12.078 19.1805 12.4423 19.5577C13.9425 21.0575 15.977 21.9 18.0983 21.9C20.2196 21.9 22.2541 21.0575 23.7543 19.5577L29.7543 13.5577C31.2116 12.0489 32.0179 10.0281 31.9997 7.93049C31.9815 5.83291 31.1401 3.82641 29.6569 2.34315C28.1736 0.859881 26.1671 0.0185298 24.0695 0.000302421C21.9719 -0.0179249 19.9511 0.78843 18.4423 2.24569L15.4423 5.24569C15.2513 5.43019 15.0989 5.65088 14.9941 5.89489C14.8893 6.13889 14.8341 6.40133 14.8318 6.66689C14.8295 6.93245 14.8801 7.19581 14.9807 7.4416C15.0812 7.6874 15.2297 7.9107 15.4175 8.09848C15.6053 8.28627 15.8286 8.43478 16.0744 8.53534C16.3202 8.6359 16.5835 8.6865 16.8491 8.6842C17.1147 8.68189 17.3771 8.62672 17.6211 8.5219C17.8651 8.41708 18.0858 8.26472 18.2703 8.0737L21.2703 5.07369ZM11.2703 15.0737C12.0204 14.3238 13.0376 13.9025 14.0983 13.9025C15.159 13.9025 16.1762 14.3238 16.9263 15.0737C17.1108 15.2647 17.3315 15.4171 17.5755 15.5219C17.8195 15.6267 18.0819 15.6819 18.3475 15.6842C18.6131 15.6865 18.8764 15.6359 19.1222 15.5353C19.368 15.4348 19.5913 15.2863 19.7791 15.0985C19.9669 14.9107 20.1154 14.6874 20.2159 14.4416C20.3165 14.1958 20.3671 13.9325 20.3648 13.6669C20.3625 13.4013 20.3073 13.1389 20.2025 12.8949C20.0977 12.6509 19.9453 12.4302 19.7543 12.2457C18.2541 10.7459 16.2196 9.9034 14.0983 9.9034C11.977 9.9034 9.94253 10.7459 8.44231 12.2457L2.44231 18.2457C1.67822 18.9837 1.06877 19.8664 0.649495 20.8425C0.230223 21.8185 0.00953258 22.8682 0.000302054 23.9305C-0.00892848 24.9927 0.193485 26.0462 0.595732 27.0293C0.997979 28.0125 1.592 28.9057 2.34315 29.6569C3.09429 30.408 3.9875 31.002 4.97067 31.4043C5.95384 31.8065 7.00728 32.0089 8.06952 31.9997C9.13175 31.9905 10.1815 31.7698 11.1575 31.3505C12.1336 30.9312 13.0163 30.3218 13.7543 29.5577L16.7543 26.5577C16.9453 26.3732 17.0977 26.1525 17.2025 25.9085C17.3073 25.6645 17.3625 25.4021 17.3648 25.1365C17.3671 24.8709 17.3165 24.6076 17.2159 24.3618C17.1154 24.116 16.9669 23.8927 16.7791 23.7049C16.5913 23.5171 16.368 23.3686 16.1222 23.2681C15.8764 23.1675 15.6131 23.1169 15.3475 23.1192C15.0819 23.1215 14.8195 23.1767 14.5755 23.2815C14.3315 23.3863 14.1108 23.5387 13.9263 23.7297L10.9263 26.7297C10.5573 27.1117 10.1159 27.4165 9.62792 27.6261C9.13991 27.8357 8.61503 27.9461 8.08391 27.9507C7.55279 27.9553 7.02607 27.8541 6.53449 27.653C6.0429 27.4519 5.5963 27.1548 5.22073 26.7793C4.84516 26.4037 4.54814 25.9571 4.34702 25.4655C4.1459 24.9739 4.04469 24.4472 4.0493 23.9161C4.05392 23.385 4.16426 22.8601 4.3739 22.3721C4.58354 21.8841 4.88826 21.4427 5.27031 21.0737L11.2703 15.0737Z"
        />
      </svg>
    ),
    link: "#",
    onClickHandler(e, target) {
      e.preventDefault()
      if (!navigator) return

      navigator.clipboard.writeText(document.URL)

      target.current.classList.remove("opacity-0")
      target.current.classList.add("opacity-100")
      target.current.textContent = "Link is copied to clipboard"
      setTimeout(() => {
        target.current.classList.add("opacity-0")
        target.current.classList.remove("opacity-100")
      }, 3000)
    }
  },
  {
    name: "Telegram",
    icon: (
      <svg className="w-full fill-inherit" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.3957 0.984677C30.8499 0.521796 29.9925 0.455566 29.1061 0.81146H29.1046C28.1723 1.18555 2.71383 12.1055 1.67744 12.5516C1.48894 12.6171 -0.157344 13.2314 0.0122335 14.5996C0.163616 15.8333 1.48676 16.3442 1.64833 16.4031L8.12066 18.6193C8.55006 20.0487 10.133 25.3223 10.4831 26.449C10.7014 27.1513 11.0573 28.0741 11.6811 28.2641C12.2284 28.4752 12.7728 28.2823 13.125 28.0057L17.0821 24.3354L23.47 29.3172L23.6221 29.4082C24.0559 29.6003 24.4714 29.6964 24.8681 29.6964C25.1745 29.6964 25.4685 29.6389 25.7494 29.5239C26.7065 29.1309 27.0893 28.219 27.1294 28.1156L31.9008 3.31437C32.1919 1.98977 31.7873 1.31583 31.3957 0.984677ZM13.8288 19.5057L11.6454 25.3282L9.462 18.0501L26.2014 5.67754L13.8288 19.5057Z" />
      </svg>
    ),
    link: "/",
    linkCallback(url) {
      return `https://t.me/share/url?url=${url}&text=hey,%20coba%20cek%20artikel%20ini`
    },
    target: "_blank"
  },
  {
    name: "Facebook",
    icon: (
      <svg className="w-full fill-inherit" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0.748474C7.164 0.748474 0 7.91247 0 16.7485C0 24.7698 5.90933 31.3938 13.608 32.5511V20.9885H9.64933V16.7831H13.608V13.9845C13.608 9.35114 15.8653 7.31781 19.716 7.31781C21.56 7.31781 22.536 7.45514 22.9973 7.51647V11.1871H20.3707C18.736 11.1871 18.1653 12.7378 18.1653 14.4845V16.7831H22.956L22.3067 20.9885H18.1653V32.5845C25.9747 31.5258 32 24.8485 32 16.7485C32 7.91247 24.836 0.748474 16 0.748474Z" />
      </svg>
    ),
    link: "/",
    linkCallback(url) {
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
    target: "_blank"
  },
  {
    name: "Twitter",
    icon: (
      <svg className="w-full fill-inherit" width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0637 25.7485C22.1397 25.7485 28.7437 15.8433 28.7437 7.25386C28.7437 6.97256 28.7379 6.69254 28.7251 6.41369C30.0101 5.49313 31.119 4.35332 32 3.04772C30.8236 3.56552 29.5577 3.91403 28.2297 4.07116C29.5852 3.26645 30.6258 1.99338 31.1168 0.475896C29.828 1.23283 28.4181 1.76643 26.9478 2.0537C25.7498 0.79022 24.0442 0 22.1555 0C18.5299 0 15.5898 2.91099 15.5898 6.49924C15.5898 7.00938 15.6475 7.50542 15.7601 7.98138C10.3035 7.70954 5.46504 5.12298 2.22686 1.18997C1.64364 2.18195 1.33687 3.30936 1.33789 4.45706C1.33789 6.71224 2.49691 8.70305 4.25951 9.86778C3.21691 9.83626 2.1972 9.55744 1.28611 9.05477C1.28514 9.08207 1.28514 9.10865 1.28514 9.13781C1.28514 12.2858 3.54816 14.9141 6.55226 15.5097C5.98805 15.6618 5.40585 15.7387 4.82107 15.7384C4.39876 15.7384 3.98719 15.6972 3.58719 15.6212C4.42302 18.2039 6.8467 20.0834 9.72026 20.1359C7.47317 21.8796 4.64254 22.9183 1.56605 22.9183C1.0427 22.9187 0.519777 22.8886 0 22.8282C2.90563 24.6721 6.35545 25.7485 10.0637 25.7485Z" />
      </svg>
    ),
    link: "/",
    linkCallback(url) {
      return `https://twitter.com/intent/tweet?text=hey,%20coba%20cek%20artikel%20ini%20${url}`
    },
    target: "_blank"
  },
  {
    name: "Linkedin",
    icon: (
      <svg className="w-full fill-inherit" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.31029 0.696411C1.99929 0.696411 0.935791 1.72341 0.935791 2.98866V30.4049C0.935791 31.6703 1.99942 32.6964 3.31029 32.6964H30.6898C32.0013 32.6964 33.0643 31.6702 33.0643 30.4045V2.98866C33.0643 1.72341 32.0013 0.696411 30.6898 0.696411H3.31029ZM18.1678 27.4762H13.3605C13.3605 27.4762 13.4235 14.4217 13.3607 13.0702H18.1682V15.1093L18.1362 15.1588H18.1682V15.1093C18.8073 14.1279 19.9511 12.7319 22.5012 12.7319C25.6642 12.7319 28.0357 14.791 28.0357 19.2159V27.4762H23.2285V19.7699C23.2285 17.833 22.5323 16.512 20.7931 16.512C19.4647 16.512 18.6736 17.4029 18.3262 18.2635C18.1992 18.5707 18.1678 19.0018 18.1678 19.4318V27.4762ZM10.6993 27.4762V13.0697H5.89161V27.4762H10.6993ZM11.0162 8.61429C11.0162 9.99679 9.97269 11.103 8.29648 11.103L8.26498 11.1029C6.6514 11.1029 5.60823 9.99666 5.60823 8.61416C5.60823 7.20029 6.6829 6.12491 8.32836 6.12491C9.97269 6.12491 10.9849 7.20029 11.0162 8.61429Z"
        />
      </svg>
    ),
    link: "/",
    linkCallback(url) {
      return `http://www.linkedin.com/shareArticle?mini=true&url=${url}`
    },
    target: "_blank"
  }
]

const handleScroll = (setIsShowBackToTop: Dispatch<SetStateAction<boolean>>): ((e: Event) => void) => {
  return (e: Event) => {
    if (window.pageYOffset > window.screen.height / 2) {
      setIsShowBackToTop(true)
      return
    }
    setIsShowBackToTop(false)
  }
}

export default function PostDetail({ post, parsedBody, parsedEpilogue, url, relatedPosts }: PostDetailProps): JSX.Element {
  const [isShowBackToTop, setIsShowBackToTop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll(setIsShowBackToTop), { passive: true })
    }
    return () => {
      window.removeEventListener("scroll", handleScroll(setIsShowBackToTop))
    }
  })

  return (
    <>
      <Head>
        <title>{post.attributes.title} - Wildani Blog</title>
      </Head>
      <div className="w-full pb-6">
        <Header navbarData={navbarData} />
        <div className="hidden lg:block relative pt-8 w-full">
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>
        </div>

        <button
          onClick={(e) => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }}
          className={`fixed bottom-8 right-8 ${
            isShowBackToTop ? "translate-y -0" : "translate-y-[200%]"
          } active:translate-y-1 transition-transform duration-200 w-12 rounded-full shadow-xl aspect-square bg-wdSky flex items-center justify-center`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} className="w-6 h-6 stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>

        <div className="container mb-8 p-6 lg:p-0">
          <div className="mb-8 flex justify-center gap-4 lg:px-0 lg:gap-8 w-full flex-col lg:flex-row">
            <div className="xl:w-1/4 lg:w-1/6 flex flex-col gap-8 shrink-0 self-start sticky top-8">
              <TableOfContent tableOfContents={post.attributes.table_of_contents} />
              <Tags tags={post.attributes.tags.data} />
            </div>
            <div className="flex-grow lg:max-w-[66ch] 2xl:max-w-[84ch] shrink">
              <div className="w-full aspect-video relative overflow-hidden mb-2 rounded-t-xl">
                <Image
                  alt="banner"
                  src={process.env.NEXT_PUBLIC_ASSET_URL + post.attributes.banner.data.attributes.url}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex items-center justify-start gap-2 lg:gap-4 mb-1">
                <div className="text-xs font-bold uppercase text-gray-400 tracking-widest">{moment(post.attributes.createdAt).format("HH:mm:ss")}</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="text-xs font-semibold uppercase text-gray-400 tracking-widest">{post.attributes.category.data.attributes.title}</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="text-xs font-semibold uppercase text-gray-400 tracking-widest">M. Badar Wildani</div>
              </div>
              <h1 className="text-3xl mb-3 dark:text-wdSky text-wdBlue font-bold">{post.attributes.title}</h1>
              <div
                className="w-full font-openSans mb-4 prose prose-sm dark:prose-invert lg:prose-base 2xl:prose-lg"
                dangerouslySetInnerHTML={{ __html: parsedBody }}
              ></div>
              <Epilogue className="flex-grow-1" epilogue={parsedEpilogue} />
            </div>
            <SideTag url={url} tags={sideTags} className="w-6 shrink-0 self-start sticky top-8" />
          </div>
          <RelatedPost posts={relatedPosts} />
        </div>

        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // define apollo graphql client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.CMS_API_URL
  })

  // get post slugs
  const res = await client.query({
    query: GET_POST_SLUGS
  })

  const posts = res.data.posts.data as IPost[]
  const paths = posts.map((post) => ({ params: { slug: post.attributes.slug } }))

  return {
    fallback: false,
    paths: paths
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (context) => {
  // fetch post by slug
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.CMS_API_URL
  })
  const res = await client.query({
    query: GET_SINGLE_POST,
    variables: {
      slug: context.params!.slug
    }
  })
  const posts = res.data.posts.data as IPost[]
  if (posts.length == 0) {
    return {
      notFound: true
    }
  }
  const post = posts[0]

  // manipulate image source
  const imgRegex = /!\[(.+)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/
  const formatted = post.attributes.body.replace(imgRegex, `![$1](${process.env.NEXT_PUBLIC_ASSET_URL}$2)`)

  // syntax highlighter
  const shiki = await shikiSrc
  const mayukaiMirageTheme = await shiki.loadTheme("../../constants/themes/Mayukai-mirage-darker-color-theme.json")
  const shikiHighlighter = await shiki.getHighlighter({
    theme: mayukaiMirageTheme
  })

  // markdown parser
  const { default: MarkdownIt } = await markdownItSrc
  const { default: mdAnchor } = await markdownItAnchorSrc
  const md = new MarkdownIt({
    html: true,
    highlight: (code, lang, attrs): string => {
      return shikiHighlighter.codeToHtml(code, { lang: lang })
    }
  }).use(mdAnchor)
  const parsed = md.render(formatted)
  const parsedEpilogue = md.render(post.attributes.epilogue)

  // fetch related post by category
  const res2 = await client.query({
    query: GET_POSTS_BY_CATEGORY,
    variables: {
      slug: post.attributes.category.data.attributes.slug
    }
  })

  return {
    props: {
      post: post,
      parsedBody: parsed,
      parsedEpilogue: parsedEpilogue,
      url: process.env.NEXT_PUBLIC_HOST + "/posts/" + post.attributes.slug,
      relatedPosts: res2.data.posts.data as IPost[]
    }
  }
}
