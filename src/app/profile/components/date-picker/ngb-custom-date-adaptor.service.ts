import { NgbDateAdapter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NgbCustomDateAdaptorService extends NgbDateAdapter<string> {
  readonly DELIMITER = "-";

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[2], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[0], 10),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day
      : null;
  }
}
