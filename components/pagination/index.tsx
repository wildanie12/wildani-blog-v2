import Link from "next/link"

type PaginationProps = {
  className?: string
}

export default function Pagination({ className }: PaginationProps): JSX.Element {
  return (
    <div className={`flex flex-wrap gap-2 w-full justify-center ${className}`}>
      <Link href="#" className="w-8 h-8 hover:bg-opacity-30 rounded-full bg-wdSky text-wdSky bg-opacity-20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
      </Link>
      <Link href="#" className="w-8 h-8 hover:bg-opacity-30 rounded-full bg-wdSky text-wdSky bg-opacity-20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>

      {[1, 2, 3, 4, 5].map((page, i) => (
        <Link
          key={i}
          href="#"
          className="w-8 h-8 hover:bg-opacity-30 font-bold rounded-full bg-wdSky text-wdSky bg-opacity-20 flex items-center justify-center"
        >
          {page}
        </Link>
      ))}

      <Link href="#" className="w-8 h-8 hover:bg-opacity-30 rounded-full bg-wdSky text-wdSky bg-opacity-20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
      <Link href="#" className="w-8 h-8 hover:bg-opacity-30 rounded-full bg-wdSky text-wdSky bg-opacity-20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </div>
  )
}
