import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;
  @Input() loading: boolean;
  
  @Output() saveProfile = new EventEmitter<User>();

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveProfile() {
    this.saveProfile.emit(this.user);
  }

}
