import Image from "next/image"
import Link from "next/link"

type CategoryProps = {
  className?: string
  categories: ICategory[]
}

export default function Categories({ className, categories }: CategoryProps): JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      {categories.map((category, i) => (
        <Link href="/categories/[slug]" className="group" as={`/categories/${category.attributes.slug}`} key={i}>
          <div className="w-full aspect-[4/1] overflow-hidden relative">
            <div className="absolute bg-wdDark uppercase z-10 text-white bg-opacity-50 group-hover:bg-opacity-80 transition-all ease-out duration-200 tracking-widest text-lg whitespace-nowrap p-3 font-poppins font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {category.attributes.title}
            </div>
            <Image
              className="opacity-50 group-hover:opacity-100"
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${category.attributes.banner?.data.attributes.url}`}
              fill={true}
              style={{ objectFit: "cover" }}
              alt={`${category.attributes.title} category`}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
