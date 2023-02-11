type ITag = {
  id: number
  attributes: {
    name: string
    description?: string
    slug: string
    icon_svg?: string
    createdAt?: Date
    updatedAt?: Date
  }
}
