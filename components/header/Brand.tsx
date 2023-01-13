import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"

export default function Brand(): JSX.Element {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className="flex-grow flex gap-2 items-center justify-start">
      {isDark ? (
        <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.7723 53.1973C33.7723 54.9754 35.919 55.8694 37.1811 54.6168L62.5697 29.4195C63.3579 28.6373 63.3579 27.3627 62.5697 26.5804L37.1811 1.38317C35.919 0.130581 33.7723 1.02456 33.7723 2.80272V53.1973ZM51.0544 26.6448C51.836 27.4287 51.8321 28.6984 51.0458 29.4775L45.2853 35.1855C44.0228 36.4365 41.8776 35.5422 41.8776 33.7648V22.2791C41.8776 20.4958 44.0349 19.6041 45.2939 20.867L51.0544 26.6448Z"
            className="fill-wdSky"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.2277 53.1973C30.2277 54.9754 28.081 55.8694 26.8189 54.6168L1.43033 29.4195C0.642134 28.6373 0.642136 27.3627 1.43033 26.5804L5.6688 22.3739L18.5873 35.1829C19.8496 36.4345 21.9955 35.5404 21.9955 33.7626V6.17026L26.8189 1.38317C28.081 0.130584 30.2277 1.02456 30.2277 2.80272V53.1973ZM17.1113 11.0176L9.03486 19.0332L13.7024 23.6656C14.9645 24.9182 17.1113 24.0243 17.1113 22.2461V11.0176Z"
            className="fill-wdYellow"
          />
        </svg>
      ) : (
        <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.7723 53.1973C33.7723 54.9754 35.919 55.8694 37.1811 54.6168L62.5697 29.4195C63.3579 28.6373 63.3579 27.3627 62.5697 26.5804L37.1811 1.38317C35.919 0.130581 33.7723 1.02456 33.7723 2.80272V53.1973ZM51.0544 26.6448C51.836 27.4287 51.8321 28.6984 51.0458 29.4775L45.2853 35.1855C44.0228 36.4365 41.8776 35.5422 41.8776 33.7648V22.2791C41.8776 20.4958 44.0349 19.6041 45.2939 20.867L51.0544 26.6448Z"
            fill="#08415C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.2277 53.1973C30.2277 54.9754 28.081 55.8694 26.8189 54.6168L1.43033 29.4195C0.642134 28.6373 0.642136 27.3627 1.43033 26.5804L5.6688 22.3739L18.5873 35.1829C19.8496 36.4345 21.9955 35.5404 21.9955 33.7626V6.17026L26.8189 1.38317C28.081 0.130584 30.2277 1.02456 30.2277 2.80272V53.1973ZM17.1113 11.0176L9.03486 19.0332L13.7024 23.6656C14.9645 24.9182 17.1113 24.0243 17.1113 22.2461V11.0176Z"
            fill="#08415C"
          />
        </svg>
      )}
      <div className="flex-grow font-podkova">
        <div className="flex items-center gap-1">
          <div className="text-2xl leading-none font-bold text-wdBlue dark:text-white">Wildani</div>
          <small className="text-gray-500 text-lg dark:text-wdYellow">Blog</small>
        </div>
        <div className="text-gray-500 text-xs dark:text-gray-400">Berbagi apapun yang saya tau</div>
      </div>
    </div>
  )
}
