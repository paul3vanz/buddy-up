import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/models/user.model';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;

  @Input() user: User;
  @Input() loading: boolean;
  
  @Output() saveProfile = new EventEmitter<User>();

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  error = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveProfile() {
    this.saveProfile.emit(this.user);
  }

  get minutes() {
    const minimum = 3;
    const maximum = 30;

    return new Array(maximum - 2).fill(null).map((_, index) => index + minimum);
  }

  get seconds() {
    return new Array(60).fill(null).map((_, index) => index);
  }

}
