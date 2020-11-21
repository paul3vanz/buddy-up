import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-pace-selector",
  templateUrl: "./pace-selector.component.html",
  styleUrls: ["./pace-selector.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaceSelectorComponent {
  @Input() label: string;

  @Input() set pace(pace: number) {
    this.minutes = (pace / 60) | 0;
    this.seconds = pace % 60;
  }

  @Output() paceChange = new EventEmitter<number>();

  minutes = 0;
  seconds = 0;

  updatePace() {
    if (!this.seconds) {
      this.seconds = 0;
    }

    console.log("update", Number(this.minutes), Number(this.seconds));
    this.paceChange.emit(Number(this.minutes || 0) * 60 + Number(this.seconds));
  }

  get minuteRange() {
    const minimum = 3;
    const maximum = 30;

    return new Array(maximum - 2).fill(null).map((_, index) => index + minimum);
  }

  get secondRange() {
    return new Array(60).fill(null).map((_, index) => index);
  }
}
