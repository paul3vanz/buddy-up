import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbModule,
  NgbTimepickerModule,
} from "@ng-bootstrap/ng-bootstrap";

import { AuthGuard } from "../core/guards/auth.guard";
import { ClubPickerComponent } from "./containers/club-picker/club-picker.component";
import { ClubsService } from "../core/services/clubs.service";
import { CommonModule } from "@angular/common";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormInputComponent } from "../shared/components/form-input/form-input.component";
import { HttpClientModule } from "@angular/common/http";
import { LocationPickerComponent } from "./containers/location-picker/location-picker.component";
import { LocationService } from "../core/services/location.service";
import { NgModule } from "@angular/core";
import { NgbCustomDateAdaptorService } from "./components/date-picker/ngb-custom-date-adaptor.service";
import { NgbDateParserFormatterService } from "./components/date-picker/ngb-date-parser-formatter.service";
import { PaceSelectorComponent } from "../shared/components/pace-selector/pace-selector.component";
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
    PaceSelectorComponent,
    ProfileComponent,
    LocationPickerComponent,
    ClubPickerComponent,
    FormInputComponent,
    DatePickerComponent,
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
  providers: [
    AuthGuard,
    ClubsService,
    LocationService,
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateParserFormatterService,
    },
    {
      provide: NgbDateAdapter,
      useClass: NgbCustomDateAdaptorService,
    },
  ],
})
export class ProfileModule {}
