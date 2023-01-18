import BigPost from "./BigPost"
import FeaturedPost from "./FeaturedPost"

type FeaturedProps = {
  className?: string
}

export default function Featured({ className = "" }: FeaturedProps): JSX.Element {
  return (
    <div className={`dark:bg-wdDark2 dark:bg-opacity-10 dark:backdrop-blur-lg bg-white hidden lg:flex rounded-3xl shadow-xl gap-8 p-7 ${className}`}>
      <BigPost className="2xl:w-3/4 lg:w-10/12" />
      <div className="g:2/12 2xl:w-1/4 flex flex-col gap-4">
        <FeaturedPost />
        <FeaturedPost />
      </div>
      {/* <BigPost className="flex-grow" /> */}
    </div>
  )
}
