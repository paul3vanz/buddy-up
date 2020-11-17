import {
  NgbDateParserFormatter,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";

import { Injectable } from "@angular/core";

@Injectable()
export class NgbDateParserFormatterService extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split("/");
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? `${date.day}/${date.month}/${date.year}` : "";
  }
}
