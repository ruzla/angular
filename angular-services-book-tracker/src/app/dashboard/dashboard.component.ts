import { BookTrackerError } from './../models/bookTrackerError';
import { LoggerService } from '../core/logger.service';
import { Component, OnInit } from '@angular/core';
import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { DataService } from 'app/core/data.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
              private dataService: DataService,
              private title: Title ) {
    this.loggerService.log('Creating the dashboard!')
              }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders()
    .subscribe(
      (data: Reader[]) => this.allReaders = data,
      (err: BookTrackerError) => console.log(err.friendlyMessage),
      () => this.loggerService.log('All done getting readers!')
    );
    this.mostPopularBook = this.dataService.mostPopularBook;

    // this.dataService.getAuthorRecommendation(1)
    // .then(
    //   (author: string) => this.loggerService.log(author),
    //   (err: string) => this.loggerService.error(`The promise was rejected: ${err}`)
    // )
    // .catch((error: Error) => this.loggerService.error(error.message));

    this.title.setTitle(`Book tracker ${VERSION.full}`)

    this.getAuthorRecommendationAsync(1)
      .catch(err => this.loggerService.error(err));
    this.loggerService.log('Done with dashboard initialization');

    // throw new Error('Ugly technical error!');
  }

  private async getAuthorRecommendationAsync(readerID: number): Promise<void> {
      let author: string = await this.dataService.getAuthorRecommendation(readerID);
      this.loggerService.log(author);
      //
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
