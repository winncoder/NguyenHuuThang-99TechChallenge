# Book Management API

API quản lý sách sử dụng **Node.js**, **Express**, **Prisma**, và **TypeScript**.

---

## Cài đặt

1. **Clone dự án:**
    ```bash
    git clone https://github.com/winncoder/NguyenHuuThang-99TechChallenge.git
    cd NguyenHuuThang-99TechChallenge/src/problem5
    ```

2. **Cài đặt các package:**
    ```bash
    npm install
    ```

---

## Chạy ứng dụng

### Development mode:
```bash
npm run dev

### Production mode:
```bash
npm run build
npm start

## API Endpoints

### 1. Get All Books

GET /book

- **Description:** Retrieve a list of books with optional filters for availability, price range, and search.
- **Query Parameters:**
  - `inStock` (boolean): `true` or `false`
  - `minPrice` (number): Minimum price
  - `maxPrice` (number): Maximum price
  - `search` (string): Search by book title or author
- **Response:**
```json
[
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name",
    "price": 19.99,
    "pages": 200,
    "description": "Book description",
    "publisher": "Publisher Name",
    "inStock": true
  }
]


GET /book/:id

Description: Retrieve detailed information of a book by its id.
Route Parameters:
id (number): ID of the book

Response:
{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name",
  "price": 19.99,
  "pages": 200,
  "description": "Book description",
  "publisher": "Publisher Name",
  "inStock": true
}

Response if the book is not found:
{
  "error": "Book not found"
}

POST /book

Request Body:
{
  "title": "Book Title",
  "author": "Author Name",
  "description": "Book description",
  "price": 19.99,
  "pages": 200,
  "publisher": "Publisher Name",
  "inStock": true
}


PUT /book/:id
Route Parameters:
id (number): ID of the book
Request Body (Optional fields to update):
{
  "title": "Updated Title",
  "price": 25.99,
  "inStock": false
}


DELETE /book/:id

Route Parameters:
id (number): ID of the book

Response on successful deletion:
{
  "message": "Book deleted successfully"
}

Response if the book is not found:
Edit
{
  "error": "Book not found"
}