import { AuthService } from '../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: LoginPageComponent },
];

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class LoginModule {}
