import { AbstractControl, FormControl } from "@angular/forms";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

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

  constructor() {}

  ngOnInit(): void {}
}
