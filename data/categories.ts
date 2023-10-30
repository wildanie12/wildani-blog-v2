import { categoryImages } from "./uploads"

export const categories: { [key: string]: ICategory } = {
  "back-end": {
    id: 1,
    attributes: {
      slug: "back-end",
      title: "Back-end",
      banner: {
        data: categoryImages["backend.jpg"]
      },
      body: "backend"
    }
  },
  "software-design": {
    id: 2,
    attributes: {
      slug: "software-design",
      title: "Software-design",
      banner: {
        data: categoryImages["system-design.jpg"]
      },
      body: "backend"
    }
  },
  "internet-of-things": {
    id: 2,
    attributes: {
      slug: "internet-of-things",
      title: "internet-of-things",
      banner: {
        data: categoryImages["internet-of-things.jpg"]
      },
      body: "backend"
    }
  },
  "front-end": {
    id: 2,
    attributes: {
      slug: "front-end",
      title: "front-end",
      banner: {
        data: categoryImages["frontend.jpg"]
      },
      body: "backend"
    }
  },
  personal: {
    id: 2,
    attributes: {
      slug: "personal",
      title: "personal",
      banner: {
        data: categoryImages["frontend.jpg"]
      },
      body: "personal"
    }
  }
}
