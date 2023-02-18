import moment from "moment"
import Image from "next/image"
import Link from "next/link"

type BigPostProps = {
  className?: string
  post: IPost
}

export default function BigPost({ className, post }: BigPostProps): JSX.Element {
  return (
    <Link href="/posts/[slug]" as={`/posts/${post.attributes.slug}`} className={`group ${className}`}>
      <div className="w-full rounded-3xl relative aspect-video overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSET_URL}${post.attributes.banner.data.attributes.url}`}
          alt="featured big post banner"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-stretch">
        <div className="w-0 group-hover:w-4 my-2 group-hover:mr-4 transition-all ease-out duration-200 bg-wdYellow"></div>
        <div className="flex flex-col gap-1 justify-start items-start font-poppins mt-2">
          <div className="flex gap-1 text-gray-400">
            <div className="text-xs font-medium uppercase tracking-widest">{moment(post.attributes.createdAt).startOf("days").fromNow()}</div>
          </div>
          <h2 className="text-wdBlue text-2xl font-semibold dark:text-wdDarkSky">{post.attributes.title}</h2>
          <p className="text-gray-500 dark:text-white">
            {post.attributes.excerpt.length > 500 ? post.attributes.excerpt.slice(0, 500) + "..." : post.attributes.excerpt}
          </p>
        </div>
        <div className="w-4 group-hover:w-0 my-2 ml-4 transition-all ease-out duration-200 shrink-0"></div>
      </div>
    </Link>
  )
}
