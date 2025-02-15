import express from 'express'
import { bookRouter } from './book/book.controller'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/book', bookRouter)

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}....`)
})
