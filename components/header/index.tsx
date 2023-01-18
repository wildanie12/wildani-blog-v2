import Brand from "./Brand"
import Navbar, { NavbarItem } from "./Navbar"

const navbarData: NavbarItem[] = [
  {
    title: "Home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    link: "#",
    active: true
  },
  {
    title: "Software Design",
    link: "#"
  },
  {
    title: "Back-end",
    link: "#"
  },
  {
    title: "Microcontroller",
    link: "#"
  },
  {
    title: "About Me",
    link: "#"
  }
]

type HeaderProps = {
  className?: string
}

export default function Header({ className = "" }: HeaderProps): JSX.Element {
  return (
    <div className={`w-full justify-center items-center dark:bg-wdDark hidden lg:flex ${className}`}>
      <div className="container flex gap-4 justify-between py-4">
        <Brand />
        <Navbar items={navbarData} />
      </div>
    </div>
  )
}
