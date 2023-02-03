import { tags } from "../../constants/tag"
import Categories from "./Categories"
import SideTag, { SideTagData } from "./SideTag"
import Tags from "./Tags"

type SidebarProps = {
  className?: string
  tags: ITag[]
  categories: ICategory[]
}

export default function Sidebar({ className, tags, categories }: SidebarProps): JSX.Element {
  let sideTags: SideTagData[] = []
  tags.slice(0, 5).map((tag) => {
    sideTags.push({
      icon: <img src={`${process.env.NEXT_PUBLIC_ASSET_URL}${tag.attributes.icon_svg}`}></img>,
      link: `/tags/${tag.attributes.slug}`,
      name: tag.attributes.name
    })
  })

  return (
    <div className={`flex gap-8 ${className}`}>
      <SideTag className="w-8 shrink-0 pt-8" tags={sideTags} />
      <div className="flex-grow h-24 flex flex-col gap-4 bg-wdSky">
        <Categories className="" categories={categories} />
        <Tags tags={tags} />
      </div>
    </div>
  )
}
