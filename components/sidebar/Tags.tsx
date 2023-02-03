import Link from "next/link"

export type TagData = {
  name: string
  link: string
}

type TagsProps = {
  className?: string
  tags: ITag[]
}

export default function Tags({ className, tags }: TagsProps): JSX.Element {
  return (
    <div className={`hidden lg:block ${className}`}>
      <h4 className="widget-title">Tags</h4>
      <div className="flex flex-wrap w-full mt-2">
        {tags.map((tag, i) => (
          <Tag key={i} name={tag.attributes.name} link={`/tags/${tag.attributes.slug}`} />
        ))}
      </div>
    </div>
  )
}

type TagProps = {
  className?: string
  name: string
  link: string
}

export const Tag = ({ className = "", name, link }: TagProps): JSX.Element => {
  return (
    <Link
      href="/tags/[slug]"
      as={link}
      className={`dark:text-wdYellow dark:hover:bg-wdYellow dark:hover:bg-opacity-20 dark:border dark:border-wdYellow dark:bg-transparent p-1 bg-gray-100 text-xs font-poppins text-gray-500 uppercase font-semibold rounded-md m-1 ${className}`}
    >
      {name}
    </Link>
  )
}
