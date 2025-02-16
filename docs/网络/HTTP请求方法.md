---
sidebar_position: 2
---
**HTTP请求方法**

- **GET**：用于检索数据，无副作用，安全且幂等。
- **POST**：用于创建新资源，非幂等。
- **PUT**：用于更新或替换资源，幂等。
- **PATCH**：用于部分更新资源，通常设计为幂等。
- **DELETE**：用于删除资源，幂等。
- **OPTIONS**：用于查询支持的HTTP方法和其他通信选项，非幂等。
- **HEAD**：用于获取资源的头部信息，无副作用，安全且幂等。



## 1. GET

### 用途

- **数据检索**：`GET`方法用于从服务器检索资源数据。它不应对服务器上的资源产生任何副作用，即不应修改或创建资源。
- **安全且幂等**：由于`GET`请求不会改变服务器状态，它被认为是**安全**的，并且多次相同的`GET`请求将产生相同的效果，这使其成为**幂等**的请求方法。

### 适用场景

- 获取所有资源的列表。
- 获取特定资源的详细信息。

### 示例

**请求**

```http
GET /books HTTP/1.1
Host: api.example.com
Accept: application/json
```

**响应**

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": 1,
        "title": "《JavaScript权威指南》",
        "author": "David Flanagan",
        "publishedYear": 2020
    },
    {
        "id": 2,
        "title": "《你不知道的JavaScript》",
        "author": "Kyle Simpson",
        "publishedYear": 2019
    }
]
```

## 2. POST

### 用途

- **资源创建**：`POST`方法用于向服务器提交数据，以创建新的资源。它通常用于表单提交、文件上传等场景。
- **非幂等**：每次发送`POST`请求都会在服务器上创建一个新的资源，因此它不是幂等的。

### 适用场景

- 创建新用户、文章、订单等资源。
- 提交表单数据进行处理。

### 示例

**请求**

```http
POST /books HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer your-jwt-token

{
    "title": "《Node.js实战》",
    "author": "Mike Cantelon",
    "publishedYear": 2021
}
```

**响应**

```http
HTTP/1.1 201 Created
Location: https://api.example.com/books/3
Content-Type: application/json

{
    "id": 3,
    "title": "《Node.js实战》",
    "author": "Mike Cantelon",
    "publishedYear": 2021
}
```

## 3. PUT

### 用途

- **资源更新/替换**：`PUT`方法用于更新或替换服务器上的现有资源。它通常要求客户端发送完整的资源表示，以替换服务器上的当前资源。
- **幂等**：多次相同的`PUT`请求将产生相同的效果，因此它是幂等的。

### 适用场景

- 更新用户信息、文章内容等完整资源。
- 替换现有资源的全部数据。

### 示例

**请求**

```http
PUT /books/3 HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer your-jwt-token

{
    "title": "《Node.js实战（第二版）》",
    "author": "Mike Cantelon",
    "publishedYear": 2022
}
```

**响应**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 3,
    "title": "《Node.js实战（第二版）》",
    "author": "Mike Cantelon",
    "publishedYear": 2022
}
```

## 4. PATCH

### 用途

- **部分更新资源**：`PATCH`方法用于对服务器上的现有资源进行部分修改。与`PUT`不同，`PATCH`不需要发送资源的完整表示，只需发送需要更新的字段。
- **非幂等**（视具体实现而定）：虽然`PATCH`方法本身并不保证幂等性，但在大多数实现中，它可以被设计为幂等的。

### 适用场景

- 更新资源的部分字段，如修改用户的电子邮件地址或更改文章的标题。
- 需要高效传输数据，只发送变化的部分。

### 示例

**请求**

```http
PATCH /books/3 HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer your-jwt-token

{
    "publishedYear": 2023
}
```

**响应**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 3,
    "title": "《Node.js实战（第二版）》",
    "author": "Mike Cantelon",
    "publishedYear": 2023
}
```

## 5. DELETE

### 用途

- **资源删除**：`DELETE`方法用于删除服务器上的指定资源。
- **幂等**：多次发送相同的`DELETE`请求将产生相同的效果，即删除资源（如果资源已删除，再次删除不会有副作用）。

### 适用场景

- 删除用户账户、文章、订单等资源。
- 移除不再需要的或错误的资源。

### 示例

**请求**

```http
DELETE /books/3 HTTP/1.1
Host: api.example.com
Authorization: Bearer your-jwt-token
```

**响应**

```http
HTTP/1.1 204 No Content
```

## 6. OPTIONS

### 用途

- **查询支持的HTTP方法和其他选项**：`OPTIONS`方法用于描述目标资源的通信选项。它常用于CORS的预检请求，以确定服务器是否允许实际的跨域请求。
- **非幂等**：`OPTIONS`请求不会改变服务器状态。

### 适用场景

- 实现CORS的预检请求。
- 检查服务器支持哪些HTTP方法。

### 示例

**请求**

```http
OPTIONS /books/1 HTTP/1.1
Host: api.example.com
Origin: https://frontend.example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization
```

**响应**

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://frontend.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
```

## 7. HEAD

### 用途

- **获取资源的头部信息**：`HEAD`方法类似于`GET`，但服务器只返回响应头部，不包含响应体。它用于检查资源的元数据，如内容类型、内容长度等。
- **安全且幂等**：与`GET`方法类似，`HEAD`请求不会对服务器上的资源产生副作用，并且是幂等的。

### 适用场景

- 检查资源是否存在。
- 获取资源的更新时间或其他元数据。
- 优化性能，通过获取头部信息判断是否需要下载完整资源。

### 示例

**请求**

```http
HEAD /books/1 HTTP/1.1
Host: api.example.com
```

**响应**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 85
Last-Modified: Wed, 08 Oct 2024 12:34:56 GMT
```



