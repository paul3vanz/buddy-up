import { Component, OnInit } from "@angular/core";
import { filter, skip } from "rxjs/operators";

import { Account } from "src/app/core/models/account.model";
import { AuthService } from "src/app/core/services/auth.service";
import { Credentials } from "src/app/core/models/credentials.model";
import { LoadingState } from "src/app/core/models/loading-state.model";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "src/app/core/models/user.model";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  signUpFields = [
    {
      label: "Email address",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
    {
      label: "Phone number (optional)",
      key: "phone_number",
      required: false,
      displayOrder: 3,
      type: "string",
    },
  ];

  loadingState$: Observable<LoadingState>;
  account$: Observable<Account>;

  credentials: Credentials = {
    email: "paul3vanz@gmail.com",
    password: "test123",
  };

  constructor(private authService: AuthService, private router: Router) {
    this.loadingState$ = this.authService.loadingState$;
    this.account$ = this.authService.account$;

    this.account$.pipe(filter((user) => !!user)).subscribe((user) => {
      this.router.navigate(["/profile"]);
    });
  }

  ngOnInit(): void {}

  onSignIn(credentials: Credentials): void {
    this.authService.signIn(credentials);
  }
}
