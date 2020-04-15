import { DataService } from 'app/core/data.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Book } from '../models/book';
import { DataService } from '../core/data.service';
import { BookTrackerError } from './../models/bookTrackerError';

@Injectable({
    providedIn: 'root'
})
export class BookResolverService implements Resolve<Book[] | BookTrackError> {
    constructor(private dataService: DataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[] | BookTrackerError> {
        return this.dataService.getAllBooks()
            .pipe(
                catchError(err => of(err))
            );
    }
}