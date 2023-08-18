import { categories } from "../categories"
import { tags } from "../tags"
import { postImages } from "../uploads"

const title: string = `Konsep Asynchronous di node.js`
const slug: string = `konsep-asynchronous-pada-node-js`
const seoDescription: string = `cupiditate illo ab blanditiis aut officia quasi aliquid alias asperiores in fuga modi fugit architecto mollitia`
const category: { data: ICategory } = { data: categories["back-end"] }
const banner: { data: IUpload } = { data: postImages["1-banner.jpg"] }
const body: string = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, interdum ac nisi iaculis, sollicitudin imperdiet purus. Nullam non turpis dolor. Sed lectus lectus, malesuada os.Getenv() nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.
`.trim()
const epilogue: string = `
    qui labore officiis laboriosam distinctio dolorum, odio sapiente?
`.trim()
const excerpt: string = `
    cupiditate illo ab blanditiis aut officia quasi aliquid alias asperiores in fuga modi fugit architecto mollitia
`

const dataTags: { data: ITag[] } = { data: [tags["typescript"]] }
const tableOfContents: IPostTableOfContent[] = [
  {
    title: "Konsep",
    url: "#konsep",
    read_time: 3
  },
  {
    title: "Implementasi",
    url: "#implementasi",
    read_time: 2
  }
]
const readTime: number = 12
const createdAt: string = "2023-02-01T13:58:03.097Z"
const updatedAt: string = "2023-02-01T13:58:03.097Z"
const publishedAt: string = "2023-02-01T13:58:03.097Z"

const post: IPost = {
  id: 1,
  attributes: {
    title,
    banner,
    body,
    category,
    createdAt,
    updatedAt,
    epilogue,
    excerpt,
    publishedAt,
    read_time: readTime,
    seo_description: seoDescription,
    slug,
    table_of_contents: tableOfContents,
    tags: dataTags
  }
}

export default post
