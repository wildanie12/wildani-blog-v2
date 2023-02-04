**Lorem ipsum dolor sit amet**, _consectetur adipiscing elit_. <u>Sed elit purus, interdum ac nisi iaculis,</u> **sollicitu**din **<u>_imperdiet_</u>** purus. Nullam non turpis dolor. Sed lectus lectus, malesuada nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.

- Proin consectetur dolor faucibus
- Sed lectus lectus, malesuada

Tapi tak terbatas kepada:

1. Sed lectus lectus, malesuada
2. Proin consectetur dolor faucibus,

![kuching2.jpg](/uploads/kuching2_62041e0d01.jpg)

Anyway let's go to [Google](http://www.google.com) first

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, interdum ac nisi iaculis, sollicitudin imperdiet purus. Nullam non turpis dolor. Sed lectus lectus, malesuada nec enim sed, sagittis molestie tortor. Proin consectetur dolor faucibus, dictum eros ac, ultrices quam. Ut quis sapien vel ante rhoncus sagittis. Aliquam ut leo aliquet, dictum dui id, bibendum justo. In et commodo lacus. Aliquam bibendum, felis quis scelerisque commodo, enim ex feugiat ex, eu fermentum libero lacus eget lacus.

### Concept

Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.

### Domain entity layer

Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.

```go
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
```

### Unit Testing

Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.

```go
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
```

### Kesimpulan

Vivamus in dui orci. Suspendisse suscipit velit a enim pretium suscipit. Ut ultrices turpis ultricies augue auctor suscipit. Donec fermentum enim sed euismod tincidunt. Mauris tempor, tellus sed

#### kolaborasi tanpa batas

eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis.

#### kemudahan unit testing

eleifend malesuada, felis nisi vulputate neque, sit amet commodo neque diam in odio. Cras accumsan nunc non tellus ornare, ac congue velit pellentesque. Donec convallis enim id dolor ultrices iaculis. Duis eget varius sapien. Aenean sit amet sagittis diam, a commodo urna. Praesent lobortis eros arcu, sit amet semper magna consectetur vel. Quisque odio lorem, congue in nisl in, vestibulum pretium arcu.
