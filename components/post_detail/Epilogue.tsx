export type EpilogueProps = {
  className?: string
  epilogue: string
}

export default function Epilogue({ className, epilogue }: EpilogueProps): JSX.Element {
  return (
    <div className={`p-4 border-2 border-dashed border-wdSky rounded-xl bg-transparent dark:bg-[#122933] text-sm lg:text-lg ${className}`}>
      <div className="dark:text-wdSky text-wdBlue text-blue" dangerouslySetInnerHTML={{ __html: epilogue }}></div>
    </div>
  )
}
