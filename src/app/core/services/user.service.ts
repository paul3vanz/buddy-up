import { BehaviorSubject, of } from "rxjs";
import { LoadingState, LoadingStates } from "../models/loading-state.model";

import { Gender } from "../enums/gender.enum";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  mockUser: User = {
    id: "abc123",
    firstName: "Paul",
    lastName: "Evans",
    gender: Gender.Male,
    dateOfBirth: "01-01-1980",
    location: null,
    email: "paul3vanz@gmail.com",
    clubId: null,
    preferences: null,
  };

  private readonly _user = new BehaviorSubject<User>(null);
  private readonly _loadingState = new BehaviorSubject<LoadingState>(
    LoadingStates.INIT
  );

  readonly user$ = this._user.asObservable();
  readonly loadingState$ = this._loadingState.asObservable();

  get user(): User {
    return this._user.getValue();
  }

  set user(user: User) {
    this._user.next(user);
  }

  get loadingState(): LoadingState {
    return this._loadingState.getValue();
  }

  set loadingState(loadingState: LoadingState) {
    this._loadingState.next(loadingState);
  }

  loadUser(userId: string): void {
    this.loadingState = LoadingStates.LOADING;

    of(this.mockUser)
      .pipe(delay(1000))
      .subscribe((user) => {
        this.loadingState = LoadingStates.LOADED;
        this.user = user;
      });
  }

  updateUser(user: User) {}

  deleteUser(userId: string): void {}
}
