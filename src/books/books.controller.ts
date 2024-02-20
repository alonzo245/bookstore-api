import { Controller, Get } from '@nestjs/common';
import { BOOKS } from './books.mock';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {
  @Get()
  getBooks(): Book[] {
    return BOOKS;
  }
}
