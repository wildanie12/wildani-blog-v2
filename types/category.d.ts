type ICategory = {
  id: number
  attributes: {
    title: string
    body?: string
    slug: string
    banner?: {
      data: IUpload
    }
    createdAt?: Date
    updatedAt?: Date
  }
}
