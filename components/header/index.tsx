import Brand from "./Brand"
export default function Header(): JSX.Element {
  return (
    <div className="w-full flex justify-center items-center dark:bg-wdDark">
      <div className="container flex gap-4 justify-between py-4">
        <Brand />
      </div>
    </div>
  )
}
