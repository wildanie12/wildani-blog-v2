import { categories } from "../categories"
import { tags } from "../tags"
import { postImages } from "../uploads"

const title: string = `Saya dan Dunning Kruger Effect ketika belajar pemrograman`
const slug: string = `saya-dan-dunning-kruger-effect-ketika-belajar-pemrograman`
const seoDescription: string = `Salah satu penyesalan saya ketika masih belajar adalah sok tahu dan sok sudah mengetahui segalanya tentang programming. Ini mungkin berlaku bagi kamu yang ketika belajar sudah berminat untuk coding dan berhasil mempelajari dan mengimplementasikan apa yang sudah dipelajari / dikasih oleh pengajar kalian`
const category: { data: ICategory } = { data: categories["personal"] }
const banner: { data: IUpload } = { data: postImages["2-dunning-kruger"] }
const body: string = `
Salah satu penyesalan saya ketika masih belajar adalah **sok tahu dan sok sudah mengetahui segalanya tentang programming.** Ini mungkin berlaku bagi kamu yang ketika belajar sudah berminat untuk *coding* dan berhasil mempelajari dan mengimplementasikan apa yang sudah dipelajari / dikasih oleh pengajar kalian.

Memang hal ini kelihatannya lumrah untuk ditemui apalagi ketika sedang masa-masa belajar. Pertama kali kita belajar tentang sesuatu, kita merasakan kepuasan dan kebanggaan tersendiri sehingga timbul minat untuk terus lanjut belajar. Beberapa sesi belajar kemudian, semua terasa masuk akal dan seolah-olah kita berhasil memahami sendiri apa yang sudah dipelajari. *Expertise / *keterampilan perlahan mulai dibangun dengan terus belajar dan mengembangkan diri. Namun sering kali dikala keterampilan itu naik, kepercayaan diri pun juga akan naik dan bahkan bisa memuncak. Ini yang dinamakan dengan **Dunning Kruger Effect**,** Salah satu studi tingkah laku pada seseorang yang sedang membangun *expertise*nya.

## Seutas Cerita

Dulu ketika saya belajar pemrograman di tingkat SMK RPL atau kuliah informatika, saya sangat suka sekali dengan pemrograman web. Saat itu kami menggunakan pemrograman PHP untuk implementasinya. Masa awal-awal saya belajar PHP adalah salah satu terobosan yang membuka mata di dunia logical programming. Setiap kali ada tugas studi kasus, saya paling senang sekali mengerjakan karena memang sudah terbangun minat untuk terus belajar perlahan mengasah keterampilan saya sebagai web programmer.

### Mount of stupidity

Seiring berjalannya waktu, di masa-masa terakhir ada tugas akhir yang menuntut kami untuk membuat produk digital bermodalkan dengan materi web programming yang sudah kami pelajari. Seusai tugas itu selesai, seolah-olah fase baru dimulai. Sebuah produk digital dapat dikatakan sebagai produk ketika dilatarbelakangi oleh suatu masalah yang diselesaikan oleh adanya produk tersebut. Ketika saya berhasil membangun aplikasi produk digital pertama saya, rasanya seperti segala permasalahan saya bisa buatkan solusi digitalnya. Disinilah proses belajar saya melambat, dan bahkan berhenti.

Mungkin titik ini yang disebut dengan **"mount of stupidity"** yang disebut dalam kajian Dunning Kruger effect. Ketika kita merasa semuanya sudah dipelajari, namun nyatanya masih banyak sekali yang harus dipelajari. Memang dengan tingkat *expertise* seperti ini bisa dibilang "lumayan" karena sudah bisa menyelesaikan masalah dalam bentuk solusi berupa aplikasi digital. Setelahnya itu saya sudah bekerja sebagai *fullstack developer* di salah satu startup software house sembari melakukan *freelancing*, berada di dunia nyata menyelesaikan problema masalah yang ada didalamnya dan mendapat profit dari itu. Perlahan bergerak kearah yang lebih professional.

Pada saat itu, hal yang sangat disayangkan adalah proses belajar saya yang sudah melambat dan mungkin berhenti. Kala itu saya masih memakai CodeIgniter 3, salah satu *framework* PHP untuk membangun web. Di pikiran saya, CodeIgniter 3 itu sudah cukup untuk segalanya, tak perlu belajar yang lain. Pikir saya dengan belajar yang lain akan sama pada akhirnya. "Mungkin ujung-ujungnya ya sama aja, kita cuman CRUD *(create read update & delete)* ke database". Lebih buruk lagi kalian jika hanya memahami sedikit saja dari itu langsung berasa *I know everything*. Jadi jangan seperti itu, itu hanya bisa menghambat proses belajar kalian.

### Valley of despair

Kurang lebih 3 tahun saya terjebak berada pada gunung kebodohan itu. Tidak ada pikiran untuk bergabung dalam komunitas yang lebih besar. Hanya berada pada lingkaran teman yang dimana posisi kita sudah berada diatas. Hampir hilang juga minat untuk meneruskan jalan karir sebagai *software engineer*. Ketika *burn-out* saya bisa sebulan tidak pernah mengotak-atik komputer. Mungkin ini yang dinamakan dengan **"Valley of despair"** pada Dunning Kruger Effect.

### Slope of enlightment

Dipenuhi rasa bosan yang serasa "*itu-itu aja"*, saya berniat untuk iseng berada dalam komunitas. Dan disitulah fase **"Slope of enlightment"** dimulai. Dikelilingi dengan rasa *insecure* yang besar karena banyak orang lain yang lebih bagus dari saya. Ada dari mereka yang sudah belajar node.js, golang, teknologi frontend seperti react ataupun vue dan laravel. Ada dari mereka juga yang sudah bekerja sebagai *software engineer* di tempat yang ternama. Saya melihat mereka sangat nyaman sekali dengan *expertise* mereka, mendapatkan tempat kerja yang nyaman, mendapatkan project freelancing yang saya tidak bisa.

Sejak dari itulah, saya berinisiatif untuk melakukan upskilling besar-besaran, membeli / menyewa course online banyak-banyak, mengikuti kelas online & bootcamp, menghabiskan waktu berjam-jam mengikuti tutorial yang ada diinternet. Saat itu sangat brutal sekali. Serasa saya kembali pada zaman masih awal-awal belajar bahasa pemrograman. Di proses belajar ini pun saya juga menyadari saya lebih cocok di bidang *backend* dan memilih untuk fokus disitu saja untuk karir saya kedepan.

Disinilah saya sekarang, bekerja sebagai *software engineer / backend specialist* di salah satu startup menengah atas di Jakarta. Berawal dari saya yang berpikir aplikasi itu hanya CRUD saja menjadi saya yang makin *aware* bahwa ada faktor performa, keutuhan data, kolaborasi antar anggota team, skalabilitas, realibilitas, *maintainability* dalam jangka waktu lama yang harus diperhatikan. Saya bakal terus belajar dan berkembang di karir saya sebagai *software engineer*.

### Saran

Sedikit saran dari saya buat kamu yang sedang belajar untuk berkarir sebagai software engineer adalah:

* Jangan hanya belajar dari sekolah / kampus saja, dunia _programming_ sangat luas dan cepat sekali berkembangnya dari masa kemasa. Sekarang tutorial, course online, kelas online dsb sudah bertebaran diinternet, manfaatkan itu.
* Kurangi aktifitas yang tidak berkaitan dengan target kamu yang ingin jadi *programmer* jika memang mengganggu belajar kamu. *Programming* membutuhkan pikiran dan effort yang lebih.
* Ketika sudah memahami sesuatu, jangan langsung beranggapan bahwa kamu sudah tahu semuanya. Ada banyak hal yang kamu belum tahu.
* Komunitas. Ada banyak baik itu dari offline ataupun online, cari insight sebanyak-banyaknya dari situ.
`.trim()
const epilogue: string = `
    Lebih bijaklah dalam memiliki ilmu. Jika tidak, itu yang akan menyesatkanmu.
`.trim()
const excerpt: string = `Seutas cerita tentang proses belajar saya dan apa pelajaran hidup yang bisa di petik. Di artikel ini, kamu akan menelusuri bagaimana proses dari awal saya belajar dan bagaimana dunning kruger effect dapat menganggu proses belajar itu.`

const dataTags: { data: ITag[] } = { data: [tags["personal"], tags["dunningKruger"], tags["motivasi"], tags["cerita"]] }
const tableOfContents: IPostTableOfContent[] = [
  {
    title: "Seutas Cerita",
    url: "#seutas-cerita",
    read_time: 10,
    sublist: [
      { title: "Mount of stupidity", url: "#mount-of-stupidity", read_time: 5 },
      { title: "Valley of despair", url: "#valley-of-despair", read_time: 2 },
      { title: "Slope of enlightment", url: "#slope-of-enlightment", read_time: 3 }
    ]
  },
  {
    title: "Saran",
    url: "#saran",
    read_time: 2
  }
]
const readTime: number = 12
const createdAt: string = "2023-10-30T19:55:03.097Z"
const updatedAt: string = "2023-10-30T19:55:03.097Z"
const publishedAt: string = "2023-10-30T19:55:03.097Z"

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
