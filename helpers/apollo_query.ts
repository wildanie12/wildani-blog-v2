import { gql } from "@apollo/client"

export const GET_LATEST_POST = gql`
  query latestPosts($page: Int, $pageSize: Int) {
    posts(pagination: { page: $page, pageSize: $pageSize }) {
      data {
        id
        attributes {
          title
          read_time
          banner {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          excerpt
          body
          table_of_contents
          seo_description
          slug
          category {
            data {
              id
              attributes {
                title
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
                icon_svg
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`

export const GET_SINGLE_POST = gql`
  query getSinglePost($slug: String) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          read_time
          banner {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          excerpt
          body
          table_of_contents
          seo_description
          slug
          category {
            data {
              id
              attributes {
                title
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
                icon_svg
                slug
              }
            }
          }
          epilogue
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`

