import type { NextPage } from "next"
import { useContext } from "react"
import Featured from "../components/featured"
import Header from "../components/header"
import { ThemeContext } from "../providers/ThemeProvider"

const Home: NextPage = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <>
      <div className="w-full">
        <Header />
        <div className="relative pt-8 w-full">
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-600 to-transparent -z-50 opacity-10"></div>

          <div className="relative container mx-auto flex flex-col items-center justify-start">
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[132px] top-1/4 left-0 -z-10 -translate-x-1/2 rotate-45 aspect-square bg-wdYellow absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[64px] top-[calc(25%+180px)] left-0 -z-10 rotate-45 aspect-square bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[132px] h-[16px] bottom-0 left-0 -z-10 -translate-x-1/2 -rotate-45 bg-wdYellow absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[240px] h-[36px] -bottom-[16px] -left-[56px] -z-10 -translate-x-1/2 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[64px] left-1/2 -top-6 -translate-x-1/2 -z-10 rotate-45 aspect-square bg-wdRed absolute`}
            ></div>

            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[108px] h-[68px] top-1/2 -translate-y-full -right-[56px] -z-10 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[92px] h-[40px] top-[calc(50%+56px)] -right-[32px] -z-10 -rotate-45 bg-wdRed absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[160px] h-[16px] top-0 right-0 translate-x-1/2 -z-10 -rotate-45 bg-wdSky absolute`}
            ></div>
            <div
              className={`${
                isDark ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[160px] h-[16px] top-0 right-0 translate-x-1/2 -z-10 -rotate-45 bg-wdSky absolute`}
            ></div>

            <div
              className={`${
                isDark ? "opacity-40 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[160px] aspect-square top-1/2 translate-y-1/4 rounded-full right-1/2 -z-10 bg-wdYellow absolute`}
            ></div>

            <div
              className={`${
                isDark ? "opacity-50 transition-opacity duration-1000" : "opacity-0"
              } hidden lg:block w-[160px] aspect-square top-1/4 left-3/4 -translate-y-1/2 rounded-full -z-10 bg-wdYellow absolute`}
            ></div>

            {/* Featured */}
            <Featured className="w-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
