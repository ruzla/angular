import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';
import { OldBook } from '../models/oldBook';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Observable<Reader[]> {
    // return allReaders;
    return this.http.get<Reader[]>('/api/readers');
  }

  getReaderById(id: number): Observable<Reader> {
    // return allReaders.find(reader => reader.readerID === id);
    console.log('Getting a single reader');

    return this.http.get<Reader>(`/api/readers/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
      })
    });
  }

  addReader(newReader: Reader): Observable<Reader> {
    return this.http.post<Reader>('/api/readers', newReader, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateReader(updatedReader: Reader): Observable<void> {
    return this.http.put<void>(`/api/readers/${updatedReader.readerID}`, updatedReader, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteReader(readerID: number): Observable<void> {
    return this.http.delete<void>(`/api/readers/${readerID}`);
  }

  getAllBooks(): Observable<Book[] | BookTrackerError> {
    console.log('Getting all books from the server.')
    return this.http.get<Book[]>('/api/books')
      .pipe(
        catchError(err => this.handleHttpError(err))
      );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<BookTrackerError> {
    let dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return throwError(dataError);
  }

  getBookById(id: number): Observable<Book> {
    console.log('Getting single book.');
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token'
    });

    return this.http.get<Book>(`/api/books/${id}`, {
      headers: getHeaders
    });
  }

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`)
    .pipe(
      map(b => <OldBook>{
        bookTitle: b.title,
        year: b.publicationYear
      }),
      tap(classicBook => console.log(classicBook))
    )
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>('/api/books', newBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateBook(updatedBook: Book): Observable<void> {
    return this.http.put<void>(`/api/books/${updatedBook.bookID}`, updatedBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteBook(bookID: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${bookID}`);
  }
}
