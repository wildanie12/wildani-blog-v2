type IPost = {
  id: number
  attributes: {
    title: string
    read_time: number
    banner: {
      data: IUpload
    }
    body: string
    table_of_contents: IPostTableOfContent[]
    seo_description: string
    slug: string
    category: {
      data: ICategory
    }
    tags: {
      data: ITag[]
    }
    excerpt: string
    epilogue: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

type IPostTableOfContent = {
  title: string
  url: string
  read_time?: number
  sublist?: {
    title: string
    url: string
    read_time?: number
  }[]
}
