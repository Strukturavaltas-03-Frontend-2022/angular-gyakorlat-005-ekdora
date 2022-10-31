import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The good Angular programmer';
  users: User[] = [];
  currentUser: User = {} as User;

  constructor(private userSvc: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userSvc.list;
  }

  onSelectClicked(user: User) {
    this.currentUser = user;
  }

  onUpdateClicked(user: User) {
    this.userSvc.updateUser(user);
  }

  onDeleteClicked(user: User) {
    this.userSvc.removeUser(user);
  }
}
