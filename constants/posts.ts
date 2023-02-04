export const samplePost: IPost[] = [
  {
    id: 1,
    attributes: {
      title: "Clean architecture menggunakan html",
      read_time: 13,
      banner: {
        data: {
          id: 2,
          attributes: { name: "forest gump.jpg", url: "/uploads/forest_gump_a44df20071.jpg" }
        }
      },
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, interdum ac nisi iaculis, sollicitudin imperdiet purus. Nullam non turpis dolor.",
      body: "**Lorem ipsum dolor sit amet**, _consectetur adipiscing elit_. <u>Sed elit purus, interdum ac nisi iaculis,</u> **sollicitu**din **<u>_imperdiet_</u>** purus. Nullam non turpis dolor. Sed lectus lectus, malesuada `os.Getenv()` nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.\n\n- Proin consectetur dolor faucibus\n- Sed lectus lectus, malesuada \n\nTapi tak terbatas kepada:\n1. Sed lectus lectus, malesuada \n2. Proin consectetur dolor faucibus,\n\n![kuching2.jpg](/uploads/kuching2_62041e0d01.jpg)\n\nAnyway let's go to [Google](http://www.google.com) first\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, interdum ac nisi iaculis, sollicitudin imperdiet purus. Nullam non turpis dolor. Sed lectus lectus, malesuada nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.\n\n### Concept\nVivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. \n```ts\n// manipulate image source\nconst imgRegex = /!\\[(.+)\\]\\((.*?)\\s*(\"(?:.*[^\"])\")?\\s*\\)/\nconst formatted = post.attributes.body.replace(imgRegex, `![$1](${process.env.NEXT_PUBLIC_ASSET_URL}$2)`)\n\n// syntax highlighter\nconst { default: MarkdownIt } = await markdownItSrc\nconst shiki = await shikiSrc\nconst mayukaiMirageTheme = await shiki.loadTheme(\"../../constants/themes/Mayukai-mirage-darker-color-theme.json\")\nconst shikiHighlighter = await shiki.getHighlighter({\ntheme: mayukaiMirageTheme\n})\n```\nDonec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.\n\n### Domain entity layer\nVivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.\n\n```go\nfunc (service *orderServiceImpl) FindById(request *web.OrderFindByIdRequest) (web.OrderResponse, error) {\n    orderResponse := web.OrderResponse{}\n    tx, err := service.DB.GetConnOrder().Begin()\n    if err != nil {\n        return orderResponse, err\n    }\n    defer helper.CommitOrRollback(tx)\n    order, err := service.OrderRepository.FindById(tx, request.MpOrderId)\n    if err != nil {\n        return orderResponse, &exception.ErrorNotFound{\n            ErrMsg: err.Error(),\n        }\n    }\n    return web.OrderResponse(order), nil\n}\n```\n\n\n### Unit Testing\nVivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.\n\n```go\nfunc (service *orderServiceImpl) FindById(request *web.OrderFindByIdRequest) (web.OrderResponse, error) {\n    orderResponse := web.OrderResponse{}\n    tx, err := service.DB.GetConnOrder().Begin()\n    if err != nil {\n        return orderResponse, err\n    }\n    defer helper.CommitOrRollback(tx)\n    order, err := service.OrderRepository.FindById(tx, request.MpOrderId)\n    if err != nil {\n        return orderResponse, &exception.ErrorNotFound{\n            ErrMsg: err.Error(),\n        }\n    }\n    return web.OrderResponse(order), nil\n}\n```\n\n### Kesimpulan\nVivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed \n#### kolaborasi tanpa batas\neleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis.\n#### kemudahan unit testing\neleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. \n```php\nreturn view('author', [\n    'title' => $user->name,\n    'artikel' => Post::with(['category', 'user'])->where('user_id', $user->id)->paginate(5),\n]);\n```\nDuis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.\n",
      table_of_contents: [
        { title: "Concept", url: "#concept", read_time: 5 },
        { title: "Domain entity layer", url: "#domain-entity-layer", read_time: 5 },
        { title: "Unit Testing", url: "#unit-testing", read_time: 5 },
        {
          title: "Kesimpulan",
          url: "#kesimpulan",
          sublist: [
            { title: "Kolaborasi tanpa batas", url: "#kolaborasi-tanpa-batas", read_time: 5 },
            { title: "Kemudahan unit testing", url: "#kemudahan-unit-testing", read_time: 5 }
          ]
        }
      ],
      seo_description: "Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit.",
      slug: "clean-architecture-menggunakan-golang",
      category: {
        data: { id: 1, attributes: { title: "Software Design", slug: "software-design" } }
      },
      tags: {
        data: [
          { id: 1, attributes: { name: "#golang", icon_svg: "/uploads/golang_d0912b7369.svg", slug: "golang" } },
          {
            id: 3,
            attributes: { name: "#websocket", icon_svg: "/uploads/websocket_2849fc5ac9.svg", slug: "websocket" }
          },
          {
            id: 4,
            attributes: {
              name: "#rabbitmq",
              icon_svg: "/uploads/rabbitmq_9e1e121877.svg?updated_at=2023-02-01T14:01:11.954Z",
              slug: "rabbitmq"
            }
          }
        ]
      },
      epilogue:
        "tellus sed eleifend **malesuada**, felis nisi <u>vulputate</u> neque, sit amet `commodo` neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque",
      createdAt: "2023-02-01T13:58:03.097Z",
      updatedAt: "2023-02-11T09:49:58.377Z",
      publishedAt: "2023-02-01T13:58:06.678Z"
    }
  }
]
