import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { FormGroup } from "@angular/forms";
import { LoadingState } from "src/app/core/models/loading-state.model";
import { User } from "src/app/core/models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  @Input() loadingState: LoadingState;
  @Input() form: FormGroup;
  @Input() showValidation: boolean;

  @Output() saveProfile = new EventEmitter<User>();

  error = false;

  constructor() {}

  ngOnInit(): void {}

  onSaveProfile() {
    this.saveProfile.emit(this.user);
  }
}
