import { GetServerSideProps, GetStaticProps } from "next"
import { useRouter } from "next/router"

type PostDetailProps = {
  message: string
}

export default function PostDetail({ message }: PostDetailProps): JSX.Element {
  const router = useRouter()

  return (
    <div>
      <h1>
        Welcome to {router.query.slug}, our message is: {message}
      </h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PostDetailProps> = async (
  context
) => {
  return {
    props: {
      message: "hello moms"
    }
  }
}
