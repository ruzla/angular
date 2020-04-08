import { BookTrackerErrorHandlerService } from './book-tracker-error-handler.service';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlainLoggerService } from '../core/plain-logger.service';
import { DataService } from '../core/data.service';
import { LoggerService } from '../core/logger.service';
import { dataServiceFactory } from '../core/data.service.factory';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // PlainLoggerService
    // { provide: LoggerService, useExisting: PlainLoggerService},
    // { provide: LoggerService, useClass: PlainLoggerService},
    // { provide: LoggerService, useValue: {
    //   log: (message) => console.log(`MESSAGE: ${message}`),
    //   error: (message) => console.error(`PROBLEM: ${message}`)
    // }},
    // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService]}
    LoggerService, DataService,
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService }
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

