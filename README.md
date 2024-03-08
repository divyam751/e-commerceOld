# CART

- GET
- - userId : users=> \_id
- - token => Authorization : Bearer <token> (inside header)

=================================

# FLOW

=================================

# Signup

```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "admin@123"
}
// got userId => 65eae2b50fc06ca35e4dbae6
```

# Login

```json
{
  "email": "admin@gmail.com",
  "password": "admin@123"
}

//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwOTg5MjQ3MCwiZXhwIjoxNzA5ODk2MDcwfQ.py2erZhMtBfNOP1a8NuAq6Pk2ZgtRhLSJ0dYXYaJn5M",
// "userId": "65eae2b50fc06ca35e4dbae6",
```

# Cart Post

```json
{
  "userId": "user232",
  "items": [
    {
      "brand": "Sample Brand 7",
      "title": "Product 3214",
      "price": 20.99,
      "mrp": 25.99,
      "description": "This is a sample product description 1.",
      "category": "Electronics",
      "image": ["image_url_1"],
      "rating": {
        "rate": 4.5,
        "count": 10
      },
      "badge": "New",
      "quantity": 1
    }
  ]
}
```

# Cart patch

```json
{
  "userId": "user232",
  "itemId": "65ea865aed3cf8d72230d602",
  "action": "DEC"
}
```
