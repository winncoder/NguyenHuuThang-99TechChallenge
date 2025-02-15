import express from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import * as BookService from './book.service'

export const bookRouter = express.Router()

bookRouter.get('/', async (request: Request, response: Response) => {
  try {
    const { inStock, minPrice, maxPrice, search } = request.query

    const filters: any = {}

    if (inStock !== undefined) {
      filters.inStock = inStock === 'true'
    }

    if (minPrice) {
      filters.price = {
        gte: parseFloat(minPrice as string)
      }
    }
    if (maxPrice) {
      filters.price = {
        ...filters.price,
        lte: parseFloat(maxPrice as string)
      }
    }

    const books = await BookService.listBooks(filters, search as string)
    return response.status(200).json(books)
  } catch (error: any) {
    return response.status(500).json({ error: error.message })
  }
})

bookRouter.get('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10)

  try {
    const book = await BookService.getBookById(id)
    if (book) {
      return response.status(200).json(book)
    }
    return response.status(404).json({ error: 'Book not found' })
  } catch (error: any) {
    return response.status(500).json({ error: error.message })
  }
})

bookRouter.post(
  '/',
  body('title').isString().notEmpty(),
  body('author').isString().notEmpty(),
  body('price').isFloat({ gt: 0 }),
  body('pages').isInt({ gt: 0 }),
  body('description').optional().isString(),
  body('publisher').optional().isString(),
  body('inStock').optional().isBoolean(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() })
    }

    try {
      const { title, author, description, price, pages, publisher, inStock } = request.body
      const newBook = await BookService.createBook({
        title,
        author,
        description,
        price,
        pages,
        publisher,
        inStock
      })
      return response.status(201).json(newBook)
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }
)

bookRouter.delete('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10)

  try {
    await BookService.deleteBook(id)
    return response.status(200).json({ message: 'Book deleted successfully' })
  } catch (error: any) {
    return response.status(500).json({ error: error.message })
  }
})

bookRouter.put(
  '/:id',
  body('title').optional().isString().notEmpty(),
  body('author').optional().isString().notEmpty(),
  body('price').optional().isFloat({ gt: 0 }),
  body('pages').optional().isInt({ gt: 0 }),
  body('description').optional().isString(),
  body('publisher').optional().isString(),
  body('inStock').optional().isBoolean(),
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10)

    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() })
    }

    try {
      const { title, author, description, price, pages, publisher, inStock } = request.body
      const updatedBook = await BookService.updateBook({
        id,
        title,
        author,
        description,
        price,
        pages,
        publisher,
        inStock
      })
      return response.status(200).json(updatedBook)
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }
)
