import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[];
  usersSubscription: Subscription;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.usersSub.subscribe(
      (getUsers: User[]) => {
        this.users = getUsers;
      }
    );

    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
