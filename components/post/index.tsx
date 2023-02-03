import Post from "./Post"

type PostsProps = {
  className: string
  posts: IPost[]
}

export default function Posts({ className, posts = [] }: PostsProps): JSX.Element {
  return (
    <div className={` ${className}`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6`}>
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
      {/* <Pagination className="my-3" /> */}
    </div>
  )
}
