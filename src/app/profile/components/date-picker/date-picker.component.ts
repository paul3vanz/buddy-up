import { Component, Input, OnInit } from "@angular/core";

import { AbstractControl } from "@angular/forms";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
  providers: [],
})
export class DatePickerComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() control: AbstractControl;
  @Input() showValidation: boolean;

  faCalendarAlt = faCalendarAlt;

  constructor() {}

  ngOnInit(): void {}
}
