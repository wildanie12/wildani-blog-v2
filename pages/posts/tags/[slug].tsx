import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import Pagination from "../../../components/pagination"
import Post from "../../../components/post/Post"
import SideTag from "../../../components/sidebar/SideTag"
import { Tag } from "../../../components/sidebar/Tags"

import { navbarData } from "../../../constants/menu"
import { samplePost } from "../../../constants/posts"
import { sideTags } from "../../../constants/sidetags"

type PostDetailProps = {
  message: string
}

export default function PostByCategory({ message }: PostDetailProps): JSX.Element {
  const router = useRouter()

  return (
    <div className="w-full pb-6">
      <Header navbarData={navbarData} />
      <div className="relative pt-8 w-full">
        <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>
      </div>

      <div className="container px-6 lg:px-0 flex flex-col lg:flex-row gap-8 justify-start items-start mb-8">
        <SideTag className="w-full lg:w-8" tags={sideTags} />
        <div className="w-full">
          <div className="flex gap-2 items-center mb-2">
            <h4 className="uppercase font-semibold tracking-wide font-poppins text-gray-400 text-sm">Posts With</h4>
            <Tag name="#javascript" link="/tags/javascript" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Post post={samplePost[0]} />
            <Post post={samplePost[0]} />
            <Post post={samplePost[0]} />
            <Post post={samplePost[0]} />
            <Post post={samplePost[0]} />
            <Post post={samplePost[0]} />
          </div>
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          slug: "hello"
        }
      }
    ]
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (context) => {
  return {
    props: {
      message: "hello moms"
    }
  }
}
