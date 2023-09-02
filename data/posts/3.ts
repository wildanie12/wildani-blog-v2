import { categories } from "../categories"
import { tags } from "../tags"
import { postImages } from "../uploads"

const title: string = `Apakah Lorem Ipsum itu?`
const slug: string = `konsep-asynchssronous-pada-node-js`
const seoDescription: string = `
  cupiditate illo ab blanditiis aut officia quasi aliquid alias asperiores in fuga modi fugit architecto mollitia`
const category: { data: ICategory } = { data: categories["software-design"] }
const banner: { data: IUpload } = { data: postImages["1-banner.jpg"] }
const body: string = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, interdum ac nisi iaculis, sollicitudin imperdiet purus. Nullam non turpis dolor. Sed lectus lectus, malesuada \`\`\`os.Gestenv()\`\`\` nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.
  - Proin consectetur dolor faucibus
  - Sed lectus lectus, malesuada
  Tapi tak terbatas kepada:
  1. Sed lectus lectus, malesuada
  2. Proin consectetur dolor faucibus,
  
  ![gambar kucing](/sample/posts/1/cat.jpg "Gambar kucing")

  Anyway let's go to [Google](https://www.google.com) first

  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, interdum ac nisi iaculis, sollicitudin imperdiet purus. Nullam non turpis dolor. Sed lectus lectus, malesuada nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.

  ## Concept

  Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque.
  \`\`\`js
  // manipulate image source
  const imgRegex = /!\\[(.+)\\]\\((.*?)\\s*("(?:.*[^"])")?\\s*\\)/
  const formatted = post.attributes.body.replace(imgRegex, \`![$1](${process.env.NEXT_PUBLIC_ASSET_URL}$2)\`)

  // syntax highlighter
  const { default: MarkdownIt } = await markdownItSrc
  const shiki = await shikiSrc
  const mayukaiMirageTheme = await shiki.loadTheme("../../constants/themes/Mayukai-mirage-darker-color-theme.json")
  const shikiHighlighter = await shiki.getHighlighter({
  theme: mayukaiMirageTheme
  })
  \`\`\`

  Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.

  ### Domain entity layer
  
  Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.

  \`\`\`go
  func (service *orderServiceImpl) FindById(request *web.OrderFindByIdRequest) (web.OrderResponse, error) {
      orderResponse := web.OrderResponse{}
      tx, err := service.DB.GetConnOrder().Begin()
      if err != nil {
          return orderResponse, err
      }
      defer helper.CommitOrRollback(tx)
      order, err := service.OrderRepository.FindById(tx, request.MpOrderId)
      if err != nil {
          return orderResponse, &exception.ErrorNotFound{
              ErrMsg: err.Error(),
          }
      }
      return web.OrderResponse(order), nil
  }
  \`\`\`


  ### Unit Testing

  Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.

  \`\`\`go
  func (service *orderServiceImpl) FindById(request *web.OrderFindByIdRequest) (web.OrderResponse, error) {
      orderResponse := web.OrderResponse{}
      tx, err := service.DB.GetConnOrder().Begin()
      if err != nil {
          return orderResponse, err
      }
      defer helper.CommitOrRollback(tx)
      order, err := service.OrderRepository.FindById(tx, request.MpOrderId)
      if err != nil {
          return orderResponse, &exception.ErrorNotFound{
              ErrMsg: err.Error(),
          }
      }
      return web.OrderResponse(order), nil
  }
  \`\`\`

  ## Kesimpulan

  Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed

  ### kolaborasi tanpa batas

  eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis.

  ### kemudahan unit testing

  eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis.

  \`\`\`php
  return view('author', [
      'title' => $user->name,
      'artikel' => Post::with(['category', 'user'])->where('user_id', $user->id)->paginate(5),
  ]);
  \`\`\`

  Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.





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
    title: "Concept",
    url: "#concept",
    read_time: 3
  },
  {
    title: "Domain Entity Layer",
    url: "#domain-entity-layer",
    read_time: 2
  },
  {
    title: "Unit Testing",
    url: "#unit-testing",
    read_time: 3
  },
  {
    title: "Kesimpulan",
    url: "#kesimpulan",
    read_time: 2,
    sublist: [
      { title: "Kolaborasi tanpa batas", read_time: 2, url: "#kolaborasi-tanpa-batas" },
      { title: "Kemudahan unit testing", read_time: 2, url: "#kemudahan-unit-testing" }
    ]
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
