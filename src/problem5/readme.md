<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Management API Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ccc;
            overflow-x: auto;
        }
        code {
            color: #c7254e;
            background: #f9f2f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        ul {
            margin-bottom: 20px;
        }
        li {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <h1>Book Management API</h1>
    <p>API for managing books using <strong>Node.js</strong>, <strong>Express</strong>, <strong>Prisma</strong>, and <strong>TypeScript</strong>.</p>
    <hr>

    <h2>Installation</h2>
    <ol>
        <li><strong>Clone the project:</strong>
            <pre><code>git clone https://github.com/winncoder/NguyenHuuThang-99TechChallenge.git
cd NguyenHuuThang-99TechChallenge/src/problem5</code></pre>
        </li>
        <li><strong>Install packages:</strong>
            <pre><code>npm install</code></pre>
        </li>
    </ol>

    <hr>

    <h2>Run the Application</h2>

    <h3>Development mode:</h3>
    <pre><code>npm run dev</code></pre>

    <h3>Production mode:</h3>
    <pre><code>npm run build
npm start</code></pre>

    <hr>

    <h2>API Endpoints</h2>

    <h3>1. Get All Books</h3>
    <p><strong>GET</strong> <code>/book</code></p>
    <ul>
        <li><strong>Description:</strong> Retrieve a list of books with optional filters for availability, price range, and search.</li>
        <li><strong>Query Parameters:</strong>
            <ul>
                <li><code>inStock</code> (boolean): <code>true</code> or <code>false</code></li>
                <li><code>minPrice</code> (number): Minimum price</li>
                <li><code>maxPrice</code> (number): Maximum price</li>
                <li><code>search</code> (string): Search by book title or author</li>
            </ul>
        </li>
        <li><strong>Response:</strong>
            <pre><code>[
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
]</code></pre>
        </li>
    </ul>

    <hr>

    <h3>2. Get Book by ID</h3>
    <p><strong>GET</strong> <code>/book/:id</code></p>
    <ul>
        <li><strong>Description:</strong> Retrieve detailed information of a book by its id.</li>
        <li><strong>Route Parameters:</strong>
            <ul>
                <li><code>id</code> (number): ID of the book</li>
            </ul>
        </li>
        <li><strong>Response:</strong>
            <pre><code>{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name",
  "price": 19.99,
  "pages": 200,
  "description": "Book description",
  "publisher": "Publisher Name",
  "inStock": true
}</code></pre>
        </li>
        <li><strong>Response if the book is not found:</strong>
            <pre><code>{
  "error": "Book not found"
}</code></pre>
        </li>
    </ul>

    <hr>

    <h3>3. Create a New Book</h3>
    <p><strong>POST</strong> <code>/book</code></p>
    <ul>
        <li><strong>Request Body:</strong>
            <pre><code>{
  "title": "Book Title",
  "author": "Author Name",
  "description": "Book description",
  "price": 19.99,
  "pages": 200,
  "publisher": "Publisher Name",
  "inStock": true
}</code></pre>
        </li>
    </ul>

    <hr>

    <h3>4. Update a Book</h3>
    <p><strong>PUT</strong> <code>/book/:id</code></p>
    <ul>
        <li><strong>Route Parameters:</strong>
            <ul>
                <li><code>id</code> (number): ID of the book</li>
            </ul>
        </li>
        <li><strong>Request Body (Optional fields to update):</strong>
            <pre><code>{
  "title": "Updated Title",
  "price": 25.99,
  "inStock": false
}</code></pre>
        </li>
    </ul>

    <hr>

    <h3>5. Delete a Book</h3>
    <p><strong>DELETE</strong> <code>/book/:id</code></p>
    <ul>
        <li><strong>Route Parameters:</strong>
            <ul>
                <li><code>id</code> (number): ID of the book</li>
            </ul>
        </li>
        <li><strong>Response on successful deletion:</strong>
            <pre><code>{
  "message": "Book deleted successfully"
}</code></pre>
        </li>
        <li><strong>Response if the book is not found:</strong>
            <pre><code>{
  "error": "Book not found"
}</code></pre>
        </li>
    </ul>

</body>
</html>
