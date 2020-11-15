import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";

import { AuthGuard } from "../core/guards/auth.guard";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { LocationPickerComponent } from "./containers/location-picker/location-picker.component";
import { LocationService } from "../core/services/location.service";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfilePageComponent } from "./containers/profile-page/profile-page.component";
import { RouterModule } from "@angular/router";

const routes = [
  {
    path: "",
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileComponent,
    LocationPickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),

    FontAwesomeModule,
    NgbModule,
    NgbTimepickerModule,
  ],
  providers: [AuthGuard, LocationService],
})
export class ProfileModule {}
