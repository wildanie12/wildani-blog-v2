import Image from "next/image"

type BigPostProps = {
  className?: string
}

export default function BigPost({ className }: BigPostProps): JSX.Element {
  return (
    <div className={` ${className}`}>
      <div className="w-full rounded-3xl relative aspect-video overflow-hidden">
        <Image src="/sample/post-banner.jpg" alt="featured big post banner" fill={true} style={{ objectFit: "cover" }} />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start font-poppins mt-2">
        <div className="flex gap-1 text-gray-400">
          <div className="text-xs font-medium uppercase tracking-widest">July 28, 2022</div>
        </div>
        <h2 className="text-wdBlue text-2xl font-semibold dark:text-wdDarkSky">ChartJS dan Implementasinya menggunakan next.js</h2>
        <p className="text-gray-500 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum tincidunt imperdiet. Nunc porttitor ante eu dolor ornare, vel viverra nulla
          tristique. Fusce quis tincidunt nisl, at posuere neque. Sed condimentum gravida iaculis. Proin consequat non libero id accumsan.
        </p>
      </div>
    </div>
  )
}
