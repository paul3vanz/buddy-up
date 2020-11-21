import { LoadingState, LoadingStates } from "../models/loading-state.model";

import { Account } from "../models/account.model";
import { Auth } from "aws-amplify";
import { BehaviorSubject } from "rxjs";
import { Credentials } from "../models/credentials.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  private readonly _account = new BehaviorSubject<Account>(null);
  private readonly _loadingState = new BehaviorSubject<LoadingState>(
    LoadingStates.INIT
  );

  readonly account$ = this._account.asObservable();
  readonly loadingState$ = this._loadingState.asObservable();

  get account(): Account {
    return this._account.getValue();
  }

  set account(account: Account) {
    console.log("set account", account);

    this._account.next(account);
  }

  get loadingState(): LoadingState {
    return this._loadingState.getValue();
  }

  set loadingState(loadingState: LoadingState) {
    this._loadingState.next(loadingState);
  }

  signIn(credentials: Credentials): void {
    this.loadingState = LoadingStates.LOADING;

    Auth.signIn(credentials.email, credentials.password)
      .then((account) => (this.account = account))
      .catch((error) => (this.loadingState = { error }))
      .finally(() => (this.loadingState = LoadingStates.LOADED));
  }

  signOut(): void {
    this.loadingState = LoadingStates.LOADING;

    Auth.signOut()
      .then(() => (this.account = null))
      .catch((error) => (this.loadingState = { error }))
      .finally(() => (this.loadingState = LoadingStates.LOADED));
  }

  check() {
    this.loadingState = LoadingStates.LOADING;

    Auth.currentUserInfo()
      .then(({ attributes }) => {
        this.account = {
          userId: attributes.sub,
          email: attributes.email,
          emailVerified: attributes.email_verified,
        };
      })
      .catch((error) => (this.loadingState = { error }))
      .finally(() => (this.loadingState = LoadingStates.LOADED));
  }

  constructor(private httpClient: HttpClient) {
    this.check();
  }
}
