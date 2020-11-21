import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import {
  map,
  skipWhile,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from "rxjs/operators";

import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { LoadingStates } from "../models/loading-state.model";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class UserGuard implements CanActivate, CanActivateChild {
  canActivate(): Observable<boolean> {
    return this.authService.account$.pipe(
      skipWhile((account) => !account),
      tap((account) => this.userService.getUser(account.userId)),
      switchMap(() =>
        this.userService.loadingState$.pipe(
          skipWhile(
            (loadingState) =>
              loadingState === LoadingStates.LOADING ||
              loadingState === LoadingStates.INIT
          ),
          withLatestFrom(this.userService.user$),
          map(([loadingState, user]) => {
            if (user) {
              return true;
            }

            this.router.navigate(["/profile"]);
          })
        )
      )
    );
  }
  canActivateChild() {
    return this.canActivate();
  }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}
}
