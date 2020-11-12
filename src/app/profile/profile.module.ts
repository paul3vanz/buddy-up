import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from '../core/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ProfilePageComponent,
    // canActivate: [ AuthGuard ],
  },
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgbTimepickerModule,
  ],
  providers: [ AuthGuard ],
})
export class ProfileModule { }
