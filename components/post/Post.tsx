import Image from "next/image"
import Link from "next/link"

import moment from "moment"

type PostProps = {
  className?: string
  post: IPost
}

export default function Post({ className = "", post }: PostProps): JSX.Element {
  return (
    <Link href="/posts/[slug]" as={`/posts/${post.attributes.slug}`} className={`group rounded-3xl ${className}`}>
      <div className="w-full rounded-3xl relative aspect-video overflow-hidden">
        <Image
          src={process.env.NEXT_PUBLIC_ASSET_URL + post.attributes.banner.data.attributes.url}
          alt="featured big post banner"
          fill={true}
          className="z-30"
          style={{ objectFit: "cover" }}
        />
        <Image className="z-0 scale-50" loading="lazy" src="/loading.svg" fill={true} style={{ objectFit: "cover" }} alt="loading" />
      </div>
      <div className="flex items-stretch">
        <div className="w-0 group-hover:w-2 my-2 group-hover:mr-4 transition-all duration-200 bg-wdRed"></div>
        <div className="flex-grow flex flex-col justify-start items-start font-poppins mt-2">
          <div className="flex gap-2 text-gray-400 items-center">
            <div className="w-1 aspect-square rounded-full bg-gray-400"></div>
            <div className="text-xs font-medium">{moment(post.attributes.createdAt).startOf("days").fromNow()}</div>
          </div>
          <h2 className="text-wdBlue text-lg font-semibold dark:text-wdDarkSky">{post.attributes.title}</h2>
          <p className="text-gray-500 dark:text-gray-400">
            {post.attributes.excerpt.length > 250 ? post.attributes.excerpt.slice(0, 250) + "..." : post.attributes.excerpt}
          </p>
        </div>
        <div className="w-2 group-hover:w-0 my-2 shrink-0 ml-4 transition-all duration-200"></div>
      </div>
    </Link>
  )
}
