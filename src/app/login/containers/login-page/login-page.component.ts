import { Component, OnInit } from '@angular/core';
import { filter, skip } from 'rxjs/operators';

import { AuthService } from 'src/app/core/services/auth.service';
import { Credentials } from 'src/app/core/models/credentials.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loading$: Observable<boolean>;
  user$: Observable<User>;

  credentials: Credentials = {
    email: 'paul3vanz@gmail.com',
    password: 'test123',
  };

  constructor(private authService: AuthService, private router: Router) {
    this.loading$ = this.authService.loading$;
    this.user$ = this.authService.user$;

    this.user$.pipe(filter((user) => !!user)).subscribe((user) => {
      this.router.navigate(['/profile']);
    })
  }

  ngOnInit(): void {
  }

  onSignIn(credentials: Credentials): void {
    this.authService.signIn(credentials);
  }

}
