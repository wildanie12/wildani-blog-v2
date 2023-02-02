import Brand from "./Brand"
import { NavbarDesktop, NavbarItem, NavbarMobile } from "./Navbar"

type HeaderProps = {
  className?: string
  navbarData: NavbarItem[]
}

export default function Header({ className = "", navbarData }: HeaderProps): JSX.Element {
  return (
    <>
      <div className={`w-full justify-center items-center dark:bg-wdDark hidden lg:flex ${className}`}>
        <div className="container flex gap-4 justify-between py-3">
          <Brand />
          <NavbarDesktop items={navbarData} />
        </div>
      </div>
      <div className={`z-40 relative lg:hidden w-full ${className}`}>
        <div className="container flex gap-2 p-4 items-center">
          <Brand />
          <NavbarMobile items={navbarData} />
        </div>
      </div>
    </>
  )
}
