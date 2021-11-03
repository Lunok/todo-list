import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  usersSub = new Subject<User[]>();

  constructor() {}

  emitUsers(): void {
    this.usersSub.next(this.users);
  }

  addUser(user: User): void {
    this.users.push(user);
    this.emitUsers();
  }
}
