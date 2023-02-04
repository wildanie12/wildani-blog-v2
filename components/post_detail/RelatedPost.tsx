import moment from "moment"
import Image from "next/image"
import Link from "next/link"

type RelatedPostProps = {
  className?: string
  posts: IPost[]
}

export default function RelatedPost({ className, posts }: RelatedPostProps): JSX.Element {
  return (
    <div className={` ${className}`}>
      <h4 className="widget-title mb-4">Featured Posts</h4>
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${className}`}>
        {posts.map((post, i) => (
          <Link key={i} href="/posts/[slug]" as={`/posts/${post.attributes.slug}`} className={`group rounded-3xl ${className}`}>
            <div className="w-full rounded-3xl relative aspect-video overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_URL}${post.attributes.banner.data.attributes.url}`}
                alt="featured big post banner"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex items-stretch">
              <div className="w-0 group-hover:w-2 my-2 mr-0 group-hover:mr-4 transition-all duration-200 bg-wdRed"></div>
              <div className="flex-grow flex flex-col justify-start items-start font-poppins mt-2">
                <div className="flex gap-2 text-gray-400">
                  <div className="text-xs font-medium uppercase tracking-widest">{moment(post.attributes.createdAt).startOf("days").fromNow()}</div>
                </div>
                <h2 className="text-wdBlue text-lg font-semibold dark:text-wdDarkSky">{post.attributes.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{post.attributes.excerpt}</p>
              </div>
              <div className="w-2 group-hover:w-0 group-hover:ml-0 my-2 shrink-0 ml-4 transition-all duration-200"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
