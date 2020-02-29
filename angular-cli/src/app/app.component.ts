import { LoggerService } from 'my-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli';

  constructor(logger: LoggerService) {
    logger.log('hello angular');
  }
}
