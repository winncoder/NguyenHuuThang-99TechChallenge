import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

type BookRead = {
  id: number
  title: string
  author: string
  description: string | null
  price: number
  pages: number
  publisher: string | null
  inStock: boolean
  createdAt: Date
  updatedAt: Date
}

type BookWrite = {
  title: string
  author: string
  description?: string
  price: number
  pages: number
  publisher?: string
  inStock?: boolean
}

export const listBooks = async (filters: any = {}, search?: string): Promise<BookRead[]> => {
  return db.book.findMany({
    where: {
      ...filters,
      ...(search
        ? {
            title: {
              contains: search,
              mode: 'insensitive' // Không phân biệt hoa thường
            }
          }
        : {})
    },
    select: {
      id: true,
      title: true,
      author: true,
      description: true,
      price: true,
      pages: true,
      publisher: true,
      inStock: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

export const getBookById = async (id: number): Promise<BookRead | null> => {
  return db.book.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      title: true,
      author: true,
      description: true,
      price: true,
      pages: true,
      publisher: true,
      inStock: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

export const createBook = async (book: BookWrite): Promise<BookRead> => {
  return db.book.create({
    data: book,
    select: {
      id: true,
      title: true,
      author: true,
      description: true,
      price: true,
      pages: true,
      publisher: true,
      inStock: true,
      createdAt: true,
      updatedAt: true
    }
  })
}

export const deleteBook = async (id: number): Promise<void> => {
  await db.book.delete({
    where: {
      id
    }
  })
}

export const updateBook = async (book: BookWrite & { id: number }): Promise<BookRead> => {
  return db.book.update({
    where: {
      id: book.id
    },
    data: book,
    select: {
      id: true,
      title: true,
      author: true,
      description: true,
      price: true,
      pages: true,
      publisher: true,
      inStock: true,
      createdAt: true,
      updatedAt: true
    }
  })
}
