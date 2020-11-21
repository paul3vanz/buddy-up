import { BehaviorSubject, of } from "rxjs";
import { LoadingState, LoadingStates } from "../models/loading-state.model";

import { APIService } from "src/app/API.service";
import { ErrorCode } from "../enums/error-code.enum";
import { Gender } from "../enums/gender.enum";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // mockUser: User = {
  //   id: "493969ca-a59a-481c-99a0-c922a6325c5d",
  //   firstName: "Paul",
  //   lastName: "Evans",
  //   gender: Gender.Male,
  //   dateOfBirth: "1980-01-01",
  //   location: null,
  //   email: "paul3vanz@gmail.com",
  //   club: {
  //     id: "1606",
  //     name: "Black Pear Joggers",
  //   },
  //   preferences: {
  //     alerts: true,
  //     location: null,
  //     pace: {
  //       from: 305,
  //       to: 368,
  //     },
  //     radius: 10,
  //   },
  // };

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
    console.log("set user", user);

    this._user.next(user);
  }

  get loadingState(): LoadingState {
    return this._loadingState.getValue();
  }

  set loadingState(loadingState: LoadingState) {
    this._loadingState.next(loadingState);
  }

  getUser(userId: string): void {
    this.loadingState = LoadingStates.LOADING;

    this.apiService.GetUser(userId).then((user) => {
      if (user) {
        this.loadingState = LoadingStates.LOADED;
        this.user = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender as Gender,
          dateOfBirth: user.dateOfBirth,
          email: user.email,
          club: user.club,
          location: user.location,
          preferences: null,
          // user.
        };
      } else {
        this.loadingState = { error: ErrorCode.USER_NOT_FOUND };
        this.user = null;
      }
    });

    this.loadingState = LoadingStates.LOADED;
    // this.user = user as User;
  }

  createUser(user: User) {
    // this.apiService.CreateUser({});
  }

  updateUser(user: User) {}

  deleteUser(userId: string): void {}

  constructor(private apiService: APIService) {}
}
