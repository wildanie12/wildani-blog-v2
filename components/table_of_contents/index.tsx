import Link from "next/link"

type TableOfContentProps = {
  className?: string
  tableOfContents: IPostTableOfContent[]
}

export default function TableOfContent({ className, tableOfContents }: TableOfContentProps): JSX.Element {
  return (
    <div className={`hidden lg:flex flex-col gap-2 items-center justify-start ${className}`}>
      <h4 className="widget-title">Table of Contents</h4>
      <ol className="font-poppins font-semibold tracking-wide text-wdBlue dark:text-wdSky w-full lg:list-none xl:list-decimal text-left list-inside text-sm leading-6">
        {tableOfContents.map((tableOfContent, i) => (
          <li key={i} className="mb-2">
            <Link href={tableOfContent.url} className="inline-flex gap-3 items-center">
              <div className="hover:text-gray-500 dark:hover:text-gray-300">{tableOfContent.title}</div>
              {tableOfContent.read_time && (
                <div className="bg-wdRed bg-opacity-10 text-wdRed text-[10px] whitespace-nowrap leading-none px-1 py-[2px] rounded-md font-semibold">
                  {tableOfContent.read_time} min
                </div>
              )}
            </Link>
            {tableOfContent.sublist && (
              <ul className="font-normal lg:list-none xl:list-lowerAlpha lg:ml-1 xl:ml-4 list-inside">
                {tableOfContent.sublist.map((list, j) => (
                  <li key={j} className="mb-2">
                    <Link href={list.url} className="inline-flex gap-3 items-center">
                      <div className="hover:text-gray-500 dark:hover:text-gray-300">{list.title}</div>
                      {list.read_time && (
                        <div className="bg-wdRed bg-opacity-10 text-wdRed text-[10px] whitespace-nowrap leading-none px-1 py-[2px] rounded-md font-semibold">
                          {list.read_time} min
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
