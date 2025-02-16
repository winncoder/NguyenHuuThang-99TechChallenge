# Book Management API

API Book Management using **Node.js**, **Express**, **Prisma**, và **TypeScript**.

---

## Setup

1. **Clone project:**
    ```bash
    git clone https://github.com/winncoder/NguyenHuuThang-99TechChallenge.git
    cd NguyenHuuThang-99TechChallenge/src/problem5
    ```

2. **Setup packages:**
    ```bash
    npm install
    ```

---

## Run Project

### Development mode:
```bash
npm run dev
```

### Production mode:
```bash
npm run build
npm start
```

## API Endpoints

### 1. Get All Books

#### GET /book
- **Query Parameters:**
  - `inStock` (boolean): `true` or `false`
  - `minPrice` (number): Minimum price
  - `maxPrice` (number): Maximum price
  - `search` (string): Search by book title
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
```
### 2. Get a Book by ID
#### GET /book/:id

**Route Parameters:**
id (number): ID of the book

**Response:**
```json
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
```

**Response if the book is not found:**
```json
{
  "error": "Book not found"
}
```

### 3. Create a Book
#### POST /book

**Request Body:**
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "description": "Book description",
  "price": 19.99,
  "pages": 200,
  "publisher": "Publisher Name",
  "inStock": true
}
```

### 4. Update a Book by ID
#### PUT /book/:id
**Route Parameters:**
id (number): ID of the book
**Request Body (Optional fields to update):**
```json
{
  "title": "Updated Title",
  "price": 25.99,
  "inStock": false
}
```

### 5. Delete a Book by ID
#### DELETE /book/:id

**Route Parameters:**
id (number): ID of the book

**Response on successful deletion:**
```json
{
  "message": "Book deleted successfully"
}
```

**Response if the book is not found:**
```json
{
  "error": "Book not found"
}
```