import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { map, skipWhile, withLatestFrom } from "rxjs/operators";

import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { LoadingStates } from "../models/loading-state.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(): Observable<boolean> {
    return this.authService.account$.pipe(
      withLatestFrom(this.authService.loadingState$),
      skipWhile(
        ([account, loading]) => loading === LoadingStates.LOADING && !account
      ),
      map(([account]) => {
        if (account?.userId) {
          return true;
        }

        this.router.navigate(["/login"]);

        return true;
      })
    );
  }

  canActivateChild() {
    return this.canActivate();
  }

  constructor(private authService: AuthService, private router: Router) {}
}
