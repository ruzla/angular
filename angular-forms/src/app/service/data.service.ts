import { UserSettings } from './../interface/user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Weekly', 'Monthly', 'Annually']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/S55bEsCRRahFK950hjHd', userSettings);
    // return of(userSettings);
  }
}
