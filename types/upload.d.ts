type IUpload = {
  id: number
  attributes: {
    name: string
    alternativeText?: string
    caption?: strin
    width?: number
    height?: number
    formats?: Object
    hash?: string
    ext?: string
    mime?: string
    size?: string
    url: string
    previewUrl?: string
    provider?: string
    createdAt?: Date
    updatedAt?: Date
  }
}
