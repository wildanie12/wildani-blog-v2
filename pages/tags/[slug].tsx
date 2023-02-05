import { useRouter } from "next/router"

export default function PostByTags(): JSX.Element {
  const router = useRouter()

  return <>searching for post with tag {router.query.slug}</>
}
