import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { User } from '../models/user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  public user: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        (error) => {
          console.log(error);
        }
      )

    this.dataService.fetchUserById("5eaecda0d01513c7cbbcffa4").subscribe(
      (res) => {
        this.users = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
