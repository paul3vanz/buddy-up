import { Component, OnInit } from "@angular/core";
import { filter, take, tap } from "rxjs/operators";

import { AuthService } from "src/app/core/services/auth.service";
import { FormBuilder } from "@angular/forms";
import { LoadingState } from "src/app/core/models/loading-state.model";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "src/app/core/models/user.model";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
})
export class ProfilePageComponent implements OnInit {
  loadingState$: Observable<LoadingState>;
  user$: Observable<User>;

  form = this.formBuilder.group({
    firstName: [],
    lastName: [],
    gender: [],
    dateOfBirth: [],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loadingState$ = this.userService.loadingState$;

    this.userService.user$
      .pipe(
        filter((user) => !!user?.id),
        take(1)
      )
      .subscribe((user) => {
        this.form.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          dateOfBirth: user.dateOfBirth,
        });
      });
  }

  ngOnInit(): void {
    this.userService.loadUser(this.authService.account.userId);
  }

  onSaveProfile(user: User) {
    this.router.navigate(["/groups"]);
  }
}
