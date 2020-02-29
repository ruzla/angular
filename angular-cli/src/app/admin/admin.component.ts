import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[];
  hasPermission = true;

  constructor() { }

  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers()
       .then(users => this.users = users)
       .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      {name: 'John', email: 'john@angular.com'},
      {name: 'Russ', email: 'russ@angular.com'},
    ]
  }

}
