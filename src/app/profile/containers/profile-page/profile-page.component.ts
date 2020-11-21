import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { filter, take, tap } from "rxjs/operators";

import { AuthService } from "src/app/core/services/auth.service";
import { CustomValidators } from "src/app/core/validators/required-if.validator";
import { LoadingState } from "src/app/core/models/loading-state.model";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "src/app/core/models/user.model";
import { UserService } from "src/app/core/services/user.service";
import { WindowService } from "src/app/core/services/window.service";
import { appConstants } from "src/app/app.constants";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
})
export class ProfilePageComponent implements OnInit {
  loadingState$: Observable<LoadingState>;
  user$: Observable<User>;

  showValidation: boolean;

  form = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    gender: [],
    dateOfBirth: [
      "",
      [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
    ],
    club: [],
    email: ["", [Validators.required, Validators.email]],
    preferences: this.formBuilder.group({
      activityType: [],
      distance: this.formBuilder.group({
        from: [],
        to: [],
      }),
      pace: this.formBuilder.group({
        from: [],
        to: [],
      }),
      location: [],
      alerts: [true],
      radius: [
        appConstants.DEFAULT_RADIUS,
        [
          CustomValidators.validateIf(() => {
            return this.form && this.form.value.preferences.alerts;
          }, [Validators.required]),
          Validators.max(9999),
        ],
      ],
    }),
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private windowService: WindowService
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
          club: user.club,
          location: user.location,
          preferences: {
            pace: {
              from: user.preferences.pace.from,
              to: user.preferences.pace.to,
            },
          },
        });
      });
  }

  ngOnInit(): void {
    this.userService.getUser(this.authService.account.userId);
  }

  onSaveProfile(user: User) {
    if (this.form.valid) {
      this.showValidation = false;
      this.router.navigate(["/groups"]);
    } else {
      this.showValidation = true;
      this.windowService.scrollToFirstError();
    }
  }
}
