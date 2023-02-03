import Link from "next/link"
import { MouseEvent, MutableRefObject, useEffect, useRef } from "react"

export type SideTagData = {
  name: string
  icon: JSX.Element
  link: string
  linkCallback?: (url: string) => string
  target?: string
  onClickHandler?: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, target: MutableRefObject<HTMLDivElement>) => void
}

type SideTagProps = {
  className?: string
  tags: SideTagData[]
  url?: string
}

export default function SideTag({ className, tags, url }: SideTagProps): JSX.Element {
  let targets: MutableRefObject<HTMLDivElement>[] = []

  tags
    .filter((tag) => typeof tag.onClickHandler !== "undefined")
    .forEach(() => {
      if (typeof window !== "undefined") {
        targets.push(useRef<HTMLDivElement>(document.createElement("div")))
      }
    })

  return (
    <div className={`grid grid-cols-6 lg:grid-cols-1 items-stretch flex-row gap-8 lg:gap-16 ${className}`}>
      {tags.map((tag, i) => (
        <Link
          className="relative shrink-0 w-full h-8 lg:h-full fill-gray-400 dark:fill-gray-500 group"
          onClick={(e) => tag.onClickHandler && tag.onClickHandler(e, targets[i])}
          key={i}
          href={tag.linkCallback ? tag.linkCallback(url!) : tag.link}
          target={tag.target || "_self"}
        >
          {tag.onClickHandler && (
            <div
              ref={targets[i]}
              className="opacity-0 ease-out transition-opacity duration-1000 absolute whitespace-nowrap top-1/2 -left-4 -translate-y-1/2 font-semibold text-xs -translate-x-full p-2 bg-white dark:bg-wdBlue rounded-lg text-gray-600 dark:text-gray-300"
            ></div>
          )}
          <div className="hover:opacity-70 w-full h-full">{tag.icon}</div>
        </Link>
      ))}
    </div>
  )
}
