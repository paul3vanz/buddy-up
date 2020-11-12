import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, skip, skipWhile, take, tap, withLatestFrom } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      withLatestFrom(this.authService.loading$),
      skipWhile(([ user, loading ]) => loading && !user),
      map(([ user ]) => {
        if (user?.id) {
          return true;
        }
        
        this.router.navigate(['/login']);
        
        return true;
    }));
  }

  canActivateChild() {
    return this.canActivate();
  }

  constructor(private authService: AuthService, private router: Router) {}
}
