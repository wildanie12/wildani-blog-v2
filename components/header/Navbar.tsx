import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"

export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <>
      <NavbarLight {...props} />
    </>
  )
}

export type NavbarItem = {
  title: string
  icon?: JSX.Element
  link: string
  active?: boolean
}

export type NavbarProps = {
  items: NavbarItem[]
}

export const NavbarLight = ({ items = [] }: NavbarProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>()

  const { isDark, setIsDark } = useContext(ThemeContext)

  const router = useRouter()
  return (
    <div className="flex gap-2 justify-between items-center">
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className={`flex gap-2 justify-between px-3 py-2 ${
            item.active ? "bg-wdRed text-white dark:text-white rounded-lg shadow-lg" : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {item.icon && item.icon}
          <div className={`font-poppins text-xs ${item.active ? "font-bold" : "font-medium"}`}>{item.title}</div>
        </Link>
      ))}
      <div className="flex w-28 justify-start items-center group transition-all duration-200 ease-out focus-within:w-32 focus-within:shadow-lg rounded-full">
        <input
          type="text"
          className="w-0 flex-grow p-2 dark:bg-transparent text-xs font-medium border border-r-0 border-gray-400 dark:text-white rounded-l-full placeholder:font-poppins placeholder:text-xs placeholder:font-medium focus:outline-none"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && router.push(`/search?q=${searchQuery}`)}
        />
        <div className="p-2 stroke-gray-400 rounded-r-full border-gray-400 border-l-0 border">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
      <button className="bg-gray-200 p-2 rounded-lg shadow-lg active:shadow-sm transition-shadow duration-100" onClick={() => setIsDark(!isDark)}>
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
