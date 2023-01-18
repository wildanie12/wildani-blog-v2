import Image from "next/image"

type FeaturedPostProps = {
  className?: string
}

export default function FeaturedPost({ className }: FeaturedPostProps): JSX.Element {
  return (
    <div className={` ${className}`}>
      <div className="w-full rounded-3xl relative aspect-video overflow-hidden">
        <Image src="/sample/post-banner.jpg" alt="featured big post banner" fill={true} style={{ objectFit: "cover" }} />
      </div>
      <div className="flex flex-col justify-start items-start font-poppins mt-2">
        <div className="flex gap-2 text-gray-400">
          <div className="text-xs font-medium uppercase tracking-widest">July 28, 2022</div>
        </div>
        <h2 className="text-wdBlue text-lg font-semibold dark:text-wdDarkSky">ChartJS dan Implementasinya menggunakan next.js</h2>
      </div>
    </div>
  )
}
