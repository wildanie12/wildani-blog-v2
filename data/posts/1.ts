import { categories } from "../categories"
import { tags } from "../tags"
import { postImages } from "../uploads"

const title: string = `Konsep Asynchronous di javascript / node.js`
const slug: string = `konsep-asynchronous-di-javascript-nodejs`
const seoDescription: string = `Kita akan melihat berbagai implementasi secara detail tentang asynchronous javascript dan mengapa kita menggunakannya`
const category: { data: ICategory } = { data: categories["back-end"] }
const banner: { data: IUpload } = { data: postImages["1-banner.jpg"] }
const body: string = `
  Konsep concurrent sudah lama sekali diterapkan dalam bahasa pemrograman, sebuah konsep dimana suatu eksekusi kode tidak harus _blocking_ mengakibatkan eksekusi kode lainnya menjadi terhambat dan harus menunggu eksekusi kode lainnya selesai terlebih dahulu. 
  
  Terlebih lagi dengan trend sekarang ini yang mengedepankan jumlah core / thread daripada meningkatkan power di satu core, konsep asynchronous dan paralallel programming sudah menjadi hal yang lumrah untuk diketahui dan diterapkan.
  
  ## Yang dapat digunakan di JS

  Di Javascript sendiri, penerapan asynchronous sudah diterapkan sejak lama. Namun butuh beberapa iterasi pembaruan pengembangan sehingga fitur ini dapat diterapkan dengan praktis oleh developer. Berawal dari penggunaan _callback_ yang hampir disediakan pada setiap function di javascript. 


  ### Callback
  \`\`\`js
  BukuModel.save(function(err) {
    if (err) {
      console.error(err)
      return
    }
    // action setelah callback
  })
  // action yang lain
  \`\`\`
  kode diatas adalah implementasi dari sebuah action yang dapat kita eksekusi **hanya** ketika proses menyimpan data buku sudah selesai. **Selagi** data buku itu disimpan, kita bisa melakukan action yang lain.  

  callback ini sudah lama digunakan digunakan para developer dan tentunya callback ini masih jauh dari kata sempurna ketika para developer menuntut penggunaan yang praktis. Ketika kita akan melakukan banyak hal yang berurutan terjadilah sesuatu yang disebut dengan **_"callback hell"_**. Contohnya ketika kita ingin kita menyimpan data buku -> simpan data transaksi -> data struk -> publish notifikasi, dan harus dilakukan secara berurutan, kode bakal seperti berikut ini
  \`\`\`js
  BukuModel.save(function(err) {
    TransaksiModel.save(function(err) {
      Struk.save(function(err) {
        Notifier.publish(function(err) {
          // 
        })
      })
    })
  })
  \`\`\`
  
  ### Async Await
  Di versi standar javascript ECMAScript 2017, Async Await diperkenalkan untuk mengatasi masalah _callback hell_, 
`.trim()
const epilogue: string = `
    qui labore officiis laboriosam distinctio dolorum, odio sapiente?
`.trim()
const excerpt: string = `
  Kita akan melihat berbagai implementasi secara detail tentang asynchronous javascript dan mengapa kita menggunakannya
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
