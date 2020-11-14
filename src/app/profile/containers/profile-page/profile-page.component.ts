import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/core/services/auth.service";
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = this.userService.user$;
    this.loadingState$ = this.userService.loadingState$;
  }

  ngOnInit(): void {
    this.userService.loadUser(this.authService.account.userId);
  }

  onSaveProfile(user: User) {
    this.router.navigate(["/groups"]);
  }
}
