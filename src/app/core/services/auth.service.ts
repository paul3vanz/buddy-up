import { BehaviorSubject, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { Credentials } from '../models/credentials.model';
import { Gender } from '../enums/gender.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  mockUser: User = {
    id: 'abc123',
    firstName: 'Paul',
    lastName: 'Evans',
    gender: Gender.Male,
    email: 'paul3vanz@gmail.com',
    clubId: null,
  };
  
  private readonly _user = new BehaviorSubject<User>(this.mockUser);
  private readonly _loading = new BehaviorSubject<boolean>(null);

  readonly user$ = this._user.asObservable();
  readonly loading$ = this._loading.asObservable();

  constructor(private httpClient: HttpClient) {
    console.log('service constructor');

    console.log('service init', this._user.getValue());
  }

  get user(): User {
    return this._user.getValue();
  }

  set user(user: User) {
    this._user.next(user);
  }

  get loading(): boolean {
    return this._loading.getValue();
  }

  set loading(loading: boolean) {
    this._loading.next(loading);
  }
  
  signIn(credentials: Credentials): void {    
    this.loading = true;

    of(this.mockUser).pipe(
      delay(1000),
      take(1)
    ).subscribe((user) => {
      this.user = user;
      this.loading = false;
    });
  }

  signOut() {
    this.loading = true;

    this.user = null;
  }
}