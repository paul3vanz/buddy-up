import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Credentials } from '../../../core/models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() credentials: Credentials;
  @Input() error = false;
  @Input() loading = false;

  @Output() signIn = new EventEmitter<Credentials>();

  onSignIn(): void {
    if (!this.credentials?.email || !this.credentials?.password) {
      this.error = true;
      
      return;
    }

    this.error = false;

    this.signIn.emit(this.credentials);
  }

}
