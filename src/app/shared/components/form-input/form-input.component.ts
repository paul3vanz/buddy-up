import { AbstractControl, FormControl } from "@angular/forms";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

import { label } from "aws-amplify";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() control: AbstractControl;
  @Input() showValidation: boolean;
  @Input() placeholder: string;

  constructor() {}

  ngOnInit(): void {}
}
