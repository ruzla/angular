import { allBooks } from './../data';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { allReaders } from 'app/data';
import { Reader } from 'app/models/reader';
import { Book } from 'app/models/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private loggerService: LoggerService) { }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }
}