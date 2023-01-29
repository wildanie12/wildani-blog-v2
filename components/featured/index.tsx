import BigPost from "./BigPost"
import FeaturedPost from "./FeaturedPost"

type FeaturedProps = {
  className?: string
  posts: IPost[]
}

export default function Featured({ className = "", posts = [] }: FeaturedProps): JSX.Element {
  if (posts.length == 0) {
    return <></>
  }
  return (
    <div className={`dark:bg-wdDark2 dark:bg-opacity-10 dark:backdrop-blur-lg bg-white flex rounded-3xl shadow-xl gap-8 p-7 ${className}`}>
      <BigPost post={posts[0]} className="2xl:w-9/12 lg:w-8/12 w-full shrink-0" />
      <div className="hidden justify-start lg:flex grow-0 2xl:w-3/12 lg:3/12 flex-col gap-4">
        {typeof posts[1] !== "undefined" && <FeaturedPost post={posts[1]} />}
        {typeof posts[2] !== "undefined" && <FeaturedPost post={posts[2]} />}
      </div>
    </div>
  )
}
