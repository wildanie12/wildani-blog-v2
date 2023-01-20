import BigPost from "./BigPost"
import FeaturedPost from "./FeaturedPost"

type FeaturedProps = {
  className?: string
}

export default function Featured({ className = "" }: FeaturedProps): JSX.Element {
  return (
    <div className={`dark:bg-wdDark2 dark:bg-opacity-10 dark:backdrop-blur-lg bg-white hidden lg:flex rounded-3xl shadow-xl gap-8 p-7 ${className}`}>
      <BigPost className="2xl:w-9/12 lg:w-8/12 shrink-0" />
      <div className="grow-0 2xl:w-3/12 lg:3/12 flex flex-col gap-4">
        <FeaturedPost />
        <FeaturedPost />
      </div>
      {/* <BigPost className="flex-grow" /> */}
    </div>
  )
}
